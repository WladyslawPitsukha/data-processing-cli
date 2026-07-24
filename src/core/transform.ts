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

        const amountWithTax = Number((r.amount * (1 + TAX_RATE)).toFixed(2));
        const normalizedAmount = Number(r.amount.toFixed(2));

        rows.push({
            ...r,
            amountWithTax,
            normalizedAmount
        });

        byCategory[r.category] = (byCategory[r.category] ?? 0) + r.amount;
    }

    const totalAmount = Number(rows.reduce((sum, r) => sum + r.amount, 0).toFixed(2));
    
    return {
        rows, invalid, summary: {
            totalRows: rawRows.length,
            validRows: rows.length,
            invalidRows: invalid.length,
            totalAmount,
            byCategory
        }
    }
}