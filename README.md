# data-processing-cli

A TypeScript pet project for processing CSV data into validated, normalized JSON.

## About the project

This project is a small CLI-oriented data processing pipeline focused on:
- reading CSV input
- validating rows with schema rules
- transforming numeric values
- generating summary statistics

It is designed as a practical portfolio project for backend/data tooling skills.

## Current status

Project stage: early scaffold with core transformation logic implemented.

Implemented:
- CSV reader
- row validation via Zod
- transformation of amounts
- summary aggregation by category

In progress:
- CLI entrypoint and command wiring
- JSON writer
- logger utilities
- test coverage

## Features

- Validates input rows with strict schema checks
- Converts raw values into typed records
- Computes:
  - normalized amount (2 decimals)
  - amount with tax (20%)
- Collects invalid row diagnostics (row index + reason)
- Builds summary:
  - total rows
  - valid/invalid rows
  - total amount
  - totals by category

## Tech stack

- TypeScript
- Node.js
- Commander
- Zod
- csv-parse
- Chalk
- Ora
- ESLint + Prettier

## Project structure

src/
- cli.ts
- commands/
  - process.ts
- core/
  - transform.ts
- io/
  - readCsv.ts
  - writeJson.ts
- types/
  - record.ts
- utils/
  - logger.ts

test/
- transform.test.ts

data/
- sample.csv

## How to run

Install dependencies:
- npm install

Run in development:
- npm run dev

Build:
- npm run build

Run built app:
- npm run start

Run tests:
- npm run test

Lint:
- npm run lint

Format:
- npm run format

## Example workflow (target)

Input:
- CSV file with fields: id, name, category, amount

Processing:
- read CSV
- validate each row
- transform numeric values
- collect invalid row reasons
- output JSON result with summary

Output:
- processed rows
- invalid rows report
- summary analytics

## Example result shape

~~~json
{
  "rows": [
    {
      "id": 1,
      "name": "Item A",
      "category": "tools",
      "amount": 100,
      "normalizedAmount": 100,
      "amountWithTax": 120
    }
  ],
  "invalid": [
    {
      "index": 2,
      "reason": "amount must be nonnegative"
    }
  ],
  "summary": {
    "totalRows": 3,
    "validRows": 2,
    "invalidRows": 1,
    "totalAmount": 150,
    "byCategory": {
      "tools": 100,
      "other": 50
    }
  }
}