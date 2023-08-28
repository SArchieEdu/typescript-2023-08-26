export class Animal {
    feed() { }
}
class Movable {
    move() { }
}
export class Horse {
}
function applyMixins(childClass, parentClass) {
    parentClass.forEach((parent) => {
        Object.getOwnPropertyNames(parent.prototype).forEach((name) => {
            childClass.prototype[name] = parent.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Movable]);
const horse = new Horse();
horse.feed();
