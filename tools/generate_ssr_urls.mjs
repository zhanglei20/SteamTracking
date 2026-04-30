import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import "./dump_javascript_paths.mjs"; // fixing estraverse Syntax and VisitorKeys

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

const folders = [
	{
		folder: pathResolve(rootDir, "store.steampowered.com/ssr"),
		cdn: "https://cdn.fastly.steamstatic.com/store/ssr/",
	},
	/*
	{
		folder: pathResolve(rootDir, "steamcommunity.com/ssr"),
		cdn: "https://cdn.fastly.steamstatic.com/steamcommunity/public/ssr/",
	},
	*/
	{
		folder: pathResolve(rootDir, "partner.steamgames.com/ssr"),
		cdn: "https://cdn.fastly.steamstatic.com/appmgmt/ssr/",
	},
];

const languages = [
	"_arabic-",
	"_brazilian-",
	"_bulgarian-",
	"_czech-",
	"_danish-",
	"_dutch-",
	"_finnish-",
	"_french-",
	"_german-",
	"_greek-",
	"_hungarian-",
	"_indonesian-",
	"_italian-",
	"_japanese-",
	"_korean-",
	"_koreana-",
	"_latam-",
	"_norwegian-",
	"_polish-",
	"_portuguese-",
	"_romanian-",
	"_russian-",
	"_sc_schinese-",
	"_schinese-",
	"_spanish-",
	"_swedish-",
	"_tchinese-",
	"_thai-",
	"_turkish-",
	"_ukrainian-",
	"_vietnamese-",
];
const languagePattern = new RegExp(languages.join("|"));

const urls = new Set();

for (const { folder, cdn } of folders) {
	const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");

	for (const file of files) {
		try {
			const code = await readFile(join(folder, file));
			const ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "module",
			});

			traverse(ast, {
				enter: (node) => {
					if (
						(node.type === Syntax.ImportDeclaration || node.type === Syntax.ImportExpression) &&
						node.source.type === Syntax.Literal
					) {
						const file = node.source.value;

						if (!languagePattern.test(file)) {
							const url = new URL(cdn);
							url.pathname += file;
							urls.add(url.toString());
						}
					}
				},
			});

			for (const statement of ast.body) {
				if (statement.type !== Syntax.VariableDeclaration) {
					continue;
				}

				for (const decl of statement.declarations) {
					if (
						decl.init?.type === Syntax.Literal &&
						typeof decl.init.value === "string" &&
						decl.init.value.startsWith("./") &&
						decl.init.value.endsWith(".json")
					) {
						const file = decl.init.value;

						if (!languagePattern.test(file)) {
							const url = new URL(cdn);
							url.pathname += file;
							urls.add(url.toString());
						}
					}
				}
			}
		} catch (e) {
			console.error(`Unable to parse "${file}": ${e}`);
		}
	}
}

console.log("Found", urls.size, "SSR urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(pathResolve(rootDir, ".support/urls_from_ssr.txt"), strings);
