import { readFile, writeFile } from "node:fs/promises";
import type { Dataset } from "../types";

export async function readJson(path: string): Promise<Dataset> {
    const content = await readFile(path, "utf-8");

    return JSON.parse(content) as Dataset;
}

export async function writeJson(path: string, rows: Dataset): Promise<void> {
    const content = JSON.stringify(rows, null, 2);

    await writeFile(path, content, "utf-8");
}