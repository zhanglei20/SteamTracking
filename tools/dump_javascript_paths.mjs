import { readdir as readDir } from "node:fs/promises";
import { join as pathJoin, resolve as pathResolve } from "node:path";
import { Syntax, VisitorKeys } from "estraverse";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

// https://github.com/estools/estraverse/pull/120
Syntax.StaticBlock = "StaticBlock";
VisitorKeys.StaticBlock = ["body"];

const pathsToRecurse = [
	pathResolve(rootDir, "ClientExtracted/"),
	pathResolve(rootDir, "help.steampowered.com/"),
	pathResolve(rootDir, "partner.steamgames.com/"),
	pathResolve(rootDir, "steamcommunity.com/"),
	pathResolve(rootDir, "store.steampowered.com/"),
	pathResolve(rootDir, "checkout.steampowered.com/"),
	pathResolve(rootDir, "www.dota2.com/"),
	pathResolve(rootDir, "www.counter-strike.net/"),
	pathResolve(rootDir, "www.playdeadlock.com/"),
];

// Should this just be a recursive search for all webpack files?
const paths = [
	pathResolve(rootDir, "ClientExtracted/clientui/"),
	pathResolve(rootDir, "ClientExtracted/steamui/"),
	pathResolve(rootDir, "help.steampowered.com/public/javascript/applications/help/"),
	pathResolve(rootDir, "partner.steamgames.com/public/javascript/applications/appmgmt/"),
	pathResolve(rootDir, "partner.steamgames.com/ssr/"),
	pathResolve(rootDir, "steamcommunity.com/public/javascript/applications/community/"),
	pathResolve(rootDir, "steamcommunity.com/public/javascript/webui/"),
	pathResolve(rootDir, "steamcommunity.com/ssr/"),
	pathResolve(rootDir, "store.steampowered.com/public/javascript/applications/interactive_recommender/"),
	pathResolve(rootDir, "store.steampowered.com/public/javascript/applications/store/"),
	pathResolve(rootDir, "store.steampowered.com/public/shared/javascript/legacy_web/"),
	pathResolve(rootDir, "store.steampowered.com/ssr/"),
	pathResolve(rootDir, "www.dota2.com/public/javascript/applications/dpc/"),
	pathResolve(rootDir, "www.dota2.com/public/javascript/dota_react/"),
	pathResolve(rootDir, "www.counter-strike.net/public/javascript/csgo_react/"),
	pathResolve(rootDir, "www.playdeadlock.com/public/javascript/react/"),
];

/**
 * @param {string} dirName
 */
async function GetJavascriptFiles(dirName) {
	dirName = pathResolve(dirName);

	const files = await readDir(dirName);

	return files
		.filter((fileName) => {
			if (fileName === "licenses.js") {
				return false;
			}

			return fileName.endsWith(".js");
		})
		.map((fileName) => pathJoin(dirName, fileName));
}

/**
 * @returns {Promise<string[]>}
 */
export async function GetFilesToParse() {
	const promises = await Promise.all(paths.map(GetJavascriptFiles));
	return [].concat(...promises).sort();
}

/**
 * @param {string} dir
 * @yields {string}
 */
async function* GetRecursiveJavascriptFiles(dir) {
	const dirents = await readDir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* GetRecursiveJavascriptFiles(res);
		} else if (dirent.isFile() && dirent.name.endsWith(".js")) {
			yield res;
		}
	}
}

/**
 * @yields {string}
 * @returns {AsyncGenerator<string>}
 */
export async function* GetRecursiveFilesToParse() {
	for (const path of pathsToRecurse) {
		yield* GetRecursiveJavascriptFiles(path);
	}
}
