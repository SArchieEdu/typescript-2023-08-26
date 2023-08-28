export interface BaseMovie<Director = string, Actor = string> {
  title: string;
  director: Director;
  actor: Actor;
}

type DirectorDetails = {
  name: string;
  age: number;
  awards?: string[];
};

type ActorDetails = {
  name: string;
  country: string;
};

type MovieWithDetails = BaseMovie<DirectorDetails, ActorDetails>;
type Movie = BaseMovie<string, string>;

function printMovie(movie: BaseMovie<DirectorDetails, ActorDetails>) {
  console.log(movie);
}

function registerMovie(movie: BaseMovie) {
  console.log(movie);
}

printMovie({
  title: "It",
  director: { name: "", age: 30 },
  actor: { name: "", country: "" },
});

registerMovie({
  title: "It2",
  director: "",
  actor: "",
});

type Series<Duration> = {
  title: string;
  duration: Duration;
};

type TvSeries = Series<{ seasonCount: number; seriesInSeasonCount: number }>;
type MiniSeries = Series<{ seriesInSeasonCount: number }>;

class Video<Type> {
  type: Type;

  constructor(type: Type) {
    this.type = type;
  }
}

class TvVideo extends Video<"music" | "ad"> {}

const video = new TvVideo("music");

function createLabel<Title>(title: Title): { label: Title } {
  return {
    label: title,
  };
}

const createTextLabel = createLabel<string>;

createTextLabel("string");
createLabel<boolean>(true);

// const makeFilm = <Label extends string>(title: BaseMovie<Label>): Label => {
//   return title;
// };

// makeFilm<"title" | "title2" | "title3">;

function getProperty<Obj extends object, Key extends keyof Obj = keyof Obj>(
  obj: Obj,
  key: Key
): Obj[Key] {
  return obj[key];
}

const result = getProperty<DirectorDetails>({ name: "", age: 30 }, "awards");

interface Test {
  0: string;
  a: number;
}

type EntityGetters<Entity extends object> = {
  [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]: () => Entity[Property];
};

type EntitySetters<Entity extends object> = {
  [Property in keyof Entity as `set${Capitalize<Property & string>}`]: (
    value: Entity[Property]
  ) => void;
};

type CompleteEntity<Entity extends object> = Entity &
  EntityGetters<Entity> &
  EntitySetters<Entity>;

type CompleteMovie = CompleteEntity<Movie>;
