"use strict";
class Animal {
    feed() { }
}
class Horse extends Animal {
}
function Movable(Base) {
    return class BaseMovable extends Base {
        move() { }
    };
}
const MovableHorse = Movable(Horse);
const horse = new MovableHorse();
horse.feed();
horse.move();
