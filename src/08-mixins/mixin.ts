export class Animal {
  feed() {}
}

class Movable {
  move() {}
}

export class Horse {}
export interface Horse extends Animal, Movable {}

type Constructor = new (...args: any[]) => {};

function applyMixins(childClass: Constructor, parentClass: Constructor[]) {
  parentClass.forEach((parent) => {
    Object.getOwnPropertyNames(parent.prototype).forEach((name) => {
      childClass.prototype[name] = parent.prototype[name];
    });
  });
}

applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();
horse.feed();
