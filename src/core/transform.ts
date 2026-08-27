import type { Dataset, Row } from "../types";

export function filterRows(rows: Dataset, predicate: (row: Row) => boolean): Dataset {
    return rows.filter(predicate);
}

export function sortRows(rows: Dataset, key: string, direction: "asc" | "desc" = "asc"): Dataset {
    const sorted = [...rows].sort((a, b) => (a[key]! < b[key]! ? -1 : a[key]! > b[key]! ? 1 : 0));
    
    return direction === "desc" ? sorted.reverse() : sorted; 
}

export function groupBy(rows: Dataset, key: string): Record<string, Dataset> {
    return rows.reduce<Record<string, Dataset>>((groups, row) => {
        const groupKey = String(row[key]!); 

        (groups[groupKey] ??= []).push(row);

        return groups;
    }, {});
}