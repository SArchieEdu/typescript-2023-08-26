type FontWeight = 500 | 600 | 700 | "bold";

interface Film {
  title: number;
  duration: number;
}

type TVseries = {
  title: string;
  seasonCount: number;
};

type Movie = Film | TVseries;

const fontWeight: FontWeight = "bold";

const movie: Movie = { seasonCount: 123, title: "" };

function getMovie(): Film | TVseries {
  return {
    title: "",
    seasonCount: 123,
  };
}

const movieResult = getMovie();
movieResult.title;

export interface DrmContent extends DigitalContent {
  drmConfig: {};
  platform: number;
}

type DigitalContent = {
  platform: number;
};

type Content = DrmContent & DigitalContent;

type Test = string & number;

// const content: Content = { drmConfig: {}, platform: 123 };
