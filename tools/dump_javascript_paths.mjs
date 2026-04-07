import { readdir as readDir } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
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

/**
 * @param {string} dir
 * @param {string[]} out
 */
async function CollectJavascriptFiles(dir, out) {
	const dirents = await readDir(dir, { withFileTypes: true });

	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);

		if (dirent.isDirectory()) {
			await CollectJavascriptFiles(res, out);
		} else if (dirent.isFile() && dirent.name.endsWith(".js") && dirent.name !== "licenses.js") {
			out.push(res);
		}
	}
}

/**
 * @returns {Promise<string[]>}
 */
export async function GetFilesToParse() {
	const files = [];

	for (const path of pathsToRecurse) {
		await CollectJavascriptFiles(path, files);
	}

	return files.sort();
}
