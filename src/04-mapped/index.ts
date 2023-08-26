interface Film {
  title: string;
  duration: number;
  actors: string[];
  directors: string[];
  releaseYear: number;
}

let title: Film["title"];

type Fields = keyof Film; // 'title' | 'duration' | 'actors' | 'directors';

const fields: Fields = "title";

type PartialFilm = {
  [Property in keyof Film]?: Film[Property];
  // 1.Property - title // title?: string;
  // 2.Property - duration // duration?: number;
  // 3.Property - actors // actors?: string[];
  // 4.Property - directors // directors?: string[];
};

type RequiredFilm = {
  [Property in keyof PartialFilm]-?: Film[Property];
  // 1.Property - title // title: string;
  // 2.Property - duration // duration: number;
  // 3.Property - actors // actors: string[];
  // 4.Property - directors // directors: string[];
};

type ReadonlyFilm = {
  readonly [Property in keyof Film]: Film[Property];
  // 1.Property - title // title: string;
  // 2.Property - duration // duration: number;
  // 3.Property - actors // actors: string[];
  // 4.Property - directors // directors: string[];
};

type EditableFilm = {
  -readonly [Property in keyof ReadonlyFilm]: Film[Property];
  // 1.Property - title // title: string;
  // 2.Property - duration // duration: number;
  // 3.Property - actors // actors: string[];
  // 4.Property - directors // directors: string[];
};

type FilmGetters = {
  [Property in keyof Film as `get${Capitalize<Property>}`]: () => Film[Property];
};

type FilmSetters = {
  [Property in keyof Film as `set${Capitalize<Property>}`]: (
    value: Film[Property]
  ) => void;
};

type CompleteFilm = Film & FilmGetters & FilmSetters;

// class CurrentFilm implements CompleteFilm {
//     title: string;
//     duration: number;
//     actors: string[];
//     directors: string[];
//     releaseYear: number;
//     getTitle: () => string;
//     getDuration: () => number;
//     getActors: () => string[];
//     getDirectors: () => string[];
//     getReleaseYear: () => number;
//     setTitle: (value: string) => void;
//     setDuration: (value: number) => void;
//     setActors: (value: string[]) => void;
//     setDirectors: (value: string[]) => void;
//     setReleaseYear: (value: number) => void;
// }
