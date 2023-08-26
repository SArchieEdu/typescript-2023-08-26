// Boolean
export let isTrue: boolean = false;

// Number
let num: number = 123;
let float: number = 123.45;
let binary: number = 0b101;

// BigInt
let bigNum: bigint = 100n;

// String
let str: string = "Hello";

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: { a: string; b: number } = { a: "", b: 123 };

// Array
let arrayVar: number[] = [];

// Tuple
let tupleVar: [number, string] = [123, "456"];

// Any
let anyVar: any;
anyVar = "";
anyVar = 123;
anyVar = {};

// unknown
let unknownVar: unknown = { a: "" };

// let exampleVar: { a: string } = unknownVar;

// function
export function testFunction(a: string, { b }: { b: string }) {
  if (!a) {
    return;
  }

  return a + b;
}

// Literal type
let fontWeight: "bold" = "bold";

// never
const array: [] = [];
