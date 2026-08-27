export type Row = Record<string, string | number | boolean | null>;
export type Dataset = Row[];

export interface CliOptions { 
    input: string;
    output: string;
    command: "convert" | "transform";
}