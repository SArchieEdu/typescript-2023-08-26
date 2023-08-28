// 01 typeof
export function calculate(a, b) {
    if (typeof b === "number") {
        return a + b;
    }
    return a + Number(b);
}
// 02 truthiness narrowing
function sum(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
// 03 equality narrowing
function plus(a, b) {
    if (a === b) {
        return a + b;
    }
}
function makeSomeNoise(animal) {
    if ("bark" in animal) {
        animal.bark();
        if ("bite" in animal) {
            animal.bite();
        }
        return;
    }
    animal.meow();
}
// 05 instanceof
function logDate(date) {
    if (date instanceof Date) {
        console.log(date.getMilliseconds());
        return;
    }
}
// 06 type predicate
function isDog(animal) {
    const dog = animal;
    return typeof dog.bark === "function";
}
function makeNoise(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
}
function getDuration(movie) {
    if (movie.__typename === "Film") {
        movie.duration;
    }
    else {
        movie.seasonCount;
    }
}
