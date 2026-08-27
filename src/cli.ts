import type { CliOptions } from "./types.js";

export function parseArgs(argv: string[]): CliOptions {
    const args: Record<string, string> = {};

    for (let i = 0; i < argv.length; i++) {
        
        if (argv[i].startsWith("--")) {
            args[argv[i].slice(2)] = argv[i + 1];
            i++;
        }
    }

    if (!args.input || !args.output) {
        throw new Error("Usage: --input <file> --output <file> [--command convert|transform]");
    }

    return {
        input: args.input,
        output: args.output,
        command: (args.command as CliOptions["command"]) ?? "convert",
    };
}