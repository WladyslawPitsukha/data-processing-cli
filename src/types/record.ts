import { z } from "zod";

export const InputRowSchema = z.object({
    id: z.coerce.number().int().positive(),
    name: z.string().min(1),
    categoty: z.string().min(1),
    amount: z.coerce.number().nonnegative(),
});

export type InputRow = z.infer<typeof InputRowSchema>;

export type ProcessedRow = InputRow & {
    normalizedAmount: number;
    amountWithTax: number;
};

export type ProcessSummary = {
    totalRows: number;
    validRows: number;
    invalidRows: number;
    totalAmount: number;
    byCategory: Record<string, number>
};

export type ProcessResult = {
    rows?: ProcessedRow[] | any[];
    summary: ProcessSummary;
    invalid: Array<{ 
        index: number; 
        reason: string;
    }>;
};