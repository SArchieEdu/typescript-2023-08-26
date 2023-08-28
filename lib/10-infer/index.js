let movie = "132";
movie = "";
movie = "123";
// movie = 123;
function sum(a, b) {
    if (a > 2) {
        return b;
    }
    return a + b;
}
export function getProperty(obj, key) {
    return obj[key];
}
getProperty({ a: "", b: "" }, "a");
function call(functionToCall, ...args) {
    return functionToCall(...args);
}
call((a, b) => {
    return a + b;
}, "", "");
function sum2(a, b) {
    return a + b;
}
const Film = {
    __typename: "Film",
    title: "",
};
