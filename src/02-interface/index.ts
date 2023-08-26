interface Title {
  original: string;
  local?: string;
}

interface Movie {
  readonly title: Title;
  releaseYear?: string;
}

interface DrmContent {
  drmConfig: string;
}

class DigitalContent {
  platform: string;

  constructor(platform: string) {
    this.platform = platform;
  }

  play() {}
}

export interface Film extends Movie, DrmContent, DigitalContent {
  duration: number;
  directors: string[];
  actors: Actor[];
  releaseYear: string;
}

interface TvSeries extends Movie, DrmContent {
  episodeCount: number;
}

interface Actor {
  name: string;
  age: number;
}

// const film: Film = {
//   title: {
//     original: "",
//   },
//   duration: 120,
//   directors: [],
//   actors: [],
// };
// // film.title = "";

// const film2: Film = {
//   title: {
//     original: "",
//     local: "",
//   },
//   duration: 120,
//   directors: [],
//   actors: [],
// };
