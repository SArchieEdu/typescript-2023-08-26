// Boolean
export let isTrue = false;
// Number
let num = 123;
let float = 123.45;
let binary = 0b101;
// BigInt
let bigNum = 100n;
// String
let str = "Hello";
// Null
let nullVar = null;
// Undefined
let undefinedVar = undefined;
// Object
let objectVar = { a: "", b: 123 };
// Array
let arrayVar = [];
// Tuple
let tupleVar = [123, "456"];
// Any
let anyVar;
anyVar = "";
anyVar = 123;
anyVar = {};
// unknown
let unknownVar = { a: "" };
// let exampleVar: { a: string } = unknownVar;
// function
export function testFunction(a, { b }) {
    if (!a) {
        return;
    }
    return a + b;
}
// Literal type
let fontWeight = "bold";
// never
const array = [];
