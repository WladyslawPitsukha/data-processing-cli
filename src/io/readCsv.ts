import { promises as fs } from 'node:fs';
import { parse } from 'csv-parse/sync';

export async function readCsv(filePath: string): Promise<Record<string, string>[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    const rows = parse(content, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as Record<string, string>[];

    return rows;
}