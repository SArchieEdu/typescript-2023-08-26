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

// type Stage = "play" | "pause" | "idle" | "end" | "destroy";

// type StageSwitcher = {
//   [CurrentStage in Stage as `switchTo${Capitalize<CurrentStage>}`]: () => void;
// };

// type Result = {
//   currentStage: Stage;
// } & StageSwitcher;

// const useStage = (initialStage: Stage): Result => {
//   const [state, setState] = useState();

//   const switchToPlay = useCallback(() => {
//     if (!["play", "end", "destroy"].includes(state)) {
//       setState("play");
//     }
//   }, [state]);

//   const switchToPause = useCallback(() => {
//     if (!["play", "end", "destroy"].includes(state)) {
//       setState("play");
//     }
//   }, [state]);

//   const switchToIdle = useCallback(() => {
//     if (!["play", "end", "destroy"].includes(state)) {
//       setState("play");
//     }
//   }, [state]);

//   const switchToEnd = useCallback(() => {
//     if (!["play", "end", "destroy"].includes(state)) {
//       setState("play");
//     }
//   }, [state]);

//   const switchToDestroy = useCallback(() => {
//     if (!["play", "end", "destroy"].includes(state)) {
//       setState("play");
//     }
//   }, [state]);

//   return {
//     currentStage: state,
//     switchToPlay,
//     switchToPause,
//     switchToIdle,
//     switchToEnd,
//     switchToDestroy,
//   };
// };

// const {
//   currentStage,
//   switchToIdle,
//   switchToPause,
//   switchToPlay,
//   switchToDestroy,
//   switchToEnd,
// } = useStage("idle");
