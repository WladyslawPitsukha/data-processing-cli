//todo: finish this component

import {
    InputRowSchema,
    type ProcessedRow,
    type ProcessSummary,
    type ProcessResult
} from "../types/record.js"

const TAX_RATE = 0.2;

export function transformRows(rawRows: any[]): ProcessResult {
    const rows: ProcessedRow[] = [];
    const invalid: Array<{
        index: number;
        reason: string;
    }> = [];
    const byCategory: Record<string, number> = {};

    for(let i = 0; i < rawRows.length; i++) {
        const parsed = InputRowSchema.safeParse(rawRows[i]);

        if(!parsed.success) {
            invalid.push({
                index: i,
                reason: parsed.error.issues.map((issue) => {
                    return issue.message;
                }).join(", ")
            });

            continue;
        }
        
        const r = parsed.data;

        const normalizedName = r.name.trim().toLowerCase();
        const amountWithTax = Number((r.amount * (1 + TAX_RATE)).toFixed(2));
        
    }

}