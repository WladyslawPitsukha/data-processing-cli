import { describe, expect, it } from "vitest";
import { filterRows, groupBy, sortRows } from "../src/core/transform.js";
import type { Dataset } from "../src/types.js";

const users: Dataset = [
    { name: "Maya", city: "Warsaw", age: 28 },
    { name: "Alex", city: "Krakow", age: 21 },
    { name: "Ira", city: "Krakow", age: 34 },
];

describe("transform functions", () => {
    it('filters rows correctly', () => {
        const result = filterRows(users, (user) => Number(user.age) >= 25);

        expect(result).toEqual([
            { name: "Maya", city: "Warsaw", age: 28 },
            { name: "Ira", city: "Krakow", age: 34 },
        ]);
    });

    it("sorts rows descending", () => {
        const result = sortRows(users, "age", "desc");

        expect(result.map((user) => user.name)).toEqual(["Ira", "Maya", "Alex"]);
    });

    it("groups rows by a field", () => {
        const result = groupBy(users, "city");

        expect(result.Krakow).toHaveLength(2);
        expect(result.Warsaw).toEqual([{ name: "Maya", city: "Warsaw", age: 28 }]);
    })
});