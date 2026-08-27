import { parseArgs } from "./cli.js";
import {readCsv, writeCsv} from "./parsers/csv.js";
import { readJson, writeJson } from "./parsers/json.js";

async function main() {
    const options = parseArgs(process.argv.slice(2));
    const isInputCsv = options.input.endsWith(".csv");
    const isOutputCsv = options.output.endsWith(".csv");

    const rows = isInputCsv ? await readCsv(options.input) : await readJson(options.input);
    isOutputCsv ? await writeCsv(options.output, rows) : await writeJson(options.output, rows);

    console.log(`Processed ${rows.length} rows: ${options.input} -> ${options.output}`);
}

main().catch((err) => {
    console.error(err.message);
    process.exit(1);
});