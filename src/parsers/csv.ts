import { createReadStream, createWriteStream } from "node:fs";
import { createInterface } from "node:readline";
import type { Dataset, Row } from "../types.js";

export async function readCsv(path: string): Promise<Dataset> {
    const rl = createInterface({
        input: createReadStream(path),
    });
    const rows: Dataset = [];

    let headers: string[] | null = [];
    let isFirstLine = true;

    for await (const line of rl) {
        const values = line.split(","); 

        if (isFirstLine) {
            headers = values;
            isFirstLine = false;
            continue;
        }

        const row: Row = {};
        headers.forEach((header, index) => (row[header] = values[index] ?? null));
        rows.push(row);
    }

    return rows;
}

export async function writeCsv(path: string, rows: Dataset): Promise<void> {
    const stream = createWriteStream(path);

    if (rows.length === 0) {
        stream.end();
        return;
    }

    const headers = Object.keys(rows[0]);

    stream.write(headers.join(",") + "\n");

    for (const row of rows) {
        stream.write(headers.map(header => row[header] ?? "").join(",") + "\n");
    }

    stream.end();
}