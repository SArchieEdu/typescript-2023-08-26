"use strict";
let title;
const fields = "title";
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
