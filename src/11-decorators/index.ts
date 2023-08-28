import "reflect-metadata";

class Calculator {
  @LogTime()
  sum() {
    // ...
  }

  @LogTime(false)
  calculate() {
    //logic
  }

  @LogTime()
  getResult() {}
}

function LogTime(isDevOnly = true) {
  return (
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: Parameters<typeof originalMethod>) {
      console.time(propertyName);
      const result = originalMethod.apply(this, ...args);
      console.timeEnd(propertyName);

      return result;
    };
  };
}

type Constructor = new (...args: any[]) => {};

@Service({
  injectInRoot: true,
})
class UserService {}

function Service(metadata: { injectInRoot: boolean }) {
  return function (currentConstructor: Constructor) {
    Reflect.defineMetadata("service", metadata, currentConstructor);
  };
}

function getServiceInstance(service: Constructor) {
  let metadata = Reflect.getMetadata("service", service);
}

class Film {
  @Duration({ min: 60, max: 120 })
  duration: number;

  constructor(duration: number) {
    this.duration = duration;
  }
}

function Duration(metadata: { min: number; max: number }) {
  return function (object: object, propertyName: string) {
    Reflect.defineMetadata(
      `validation_${propertyName}`,
      metadata,
      object.constructor
    );
  };
}

const film = new Film(130);

function validate<Entity extends object>(entity: Entity): boolean {
  Object.getOwnPropertyNames(entity).forEach((propertyName) => {
    const conditions = Reflect.getMetadata(
      `validation_${propertyName}`,
      entity.constructor
    );
  });
}

validate(film);
