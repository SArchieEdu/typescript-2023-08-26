// 01 typeof
export function calculate(a: number, b: number | string): number {
  if (typeof b === "number") {
    return a + b;
  }

  return a + Number(b);
}

// 02 truthiness narrowing
function sum(a: number, b?: number): number {
  if (b) {
    return a + b;
  }

  return a;
}

// 03 equality narrowing
function plus(a: string | number, b: boolean | number) {
  if (a === b) {
    return a + b;
  }
}

// 04 in
interface Dog {
  bark(): void;
}
interface Wolf {
  bark(): void;
  bite(): void;
}
interface Cat {
  meow(): void;
}

function makeSomeNoise(animal: Dog | Cat | Wolf) {
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
function logDate(date: Date | string): void {
  if (date instanceof Date) {
    console.log(date.getMilliseconds());
    return;
  }
}

// 06 type predicate
function isDog(animal: unknown): animal is Dog {
  const dog = animal as Dog;

  return typeof dog.bark === "function";
}

function makeNoise(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  }
}

// 07 discriminated unions
interface Film {
  __typename: "Film";
  duration: number;
}

interface TvSeries {
  __typename: "TvSeries";
  seasonCount: number;
}

interface Comedy {
  kind: "Comedy";
}
interface Horror {
  kind: "Horror";
}

function getDuration(movie: Film | TvSeries) {
  if (movie.__typename === "Film") {
    movie.duration;
  } else {
    movie.seasonCount;
  }
}
