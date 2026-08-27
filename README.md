# data-processing-cli

A command-line tool built with **Node.js** and **TypeScript** for processing data files — reading, transforming, and writing CSV/JSON datasets from the terminal.

## Features

- Convert between CSV and JSON formats
- Filter, sort, and group tabular data through reusable TypeScript functions
- Type-safe codebase written in TypeScript
- Unit tests with Vitest

## Tech Stack

- [Node.js](https://nodejs.org/) — runtime
- [TypeScript](https://www.typescriptlang.org/) — static typing
- `tsx` / `ts-node` — run TypeScript directly in development
- `tsc` — compile to JavaScript for production

## Installation

```bash
git clone https://github.com/WladyslawPitsukha/data-processing-cli.git
cd data-processing-cli
npm install
```

## Usage

```bash
# Run in development (TypeScript directly)
npm run dev -- --input data.csv --output out.json

# Build to JavaScript and run
npm run build
npm start -- --input data.csv --output out.json
```

## Project Structure

```
data-processing-cli/
├── src/            # TypeScript source files
├── dist/           # Compiled JavaScript output (generated)
├── tsconfig.json   # TypeScript compiler configuration
├── package.json    # Dependencies and npm scripts
└── README.md
```

## Scripts

| Command         | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Run the CLI directly with TypeScript |
| `npm run build`  | Compile TypeScript to `dist/`        |
| `npm start`      | Run the compiled JavaScript build    |
| `npm test`       | Run the test suite                   |

## License

MIT