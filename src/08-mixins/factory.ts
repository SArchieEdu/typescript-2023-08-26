type Constructor = new (...args: any[]) => {};

class Animal {
  feed() {}
}

class Horse extends Animal {}

function Movable<BaseClass extends Constructor>(Base: BaseClass) {
  return class BaseMovable extends Base {
    move() {}
  };
}

const MovableHorse = Movable(Horse);

const horse = new MovableHorse();
horse.feed();
horse.move();
