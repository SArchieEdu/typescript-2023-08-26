interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type Label<Value extends number | string> = Value extends number
  ? IdLabel
  : NameLabel;

function createLabel<Value extends string | number>(
  value: Value
): Label<Value> {
  throw "";
}

const label = createLabel("");
label.name;
const idLabel = createLabel(123);
idLabel.id;

interface Film {
  __typename: "Film";
}

interface TvSeries {
  __typename: "TvSeries";
}

type MovieType = Film["__typename"] | TvSeries["__typename"];

type FilmOrTvSeries<Type extends MovieType> = Type extends "Film"
  ? Film
  : TvSeries;

function filterMovies<CurrentMovieType extends MovieType>(
  movies: (Film | TvSeries)[],
  type: CurrentMovieType
): FilmOrTvSeries<CurrentMovieType>[] {
  throw "";
}

const films = filterMovies([], "Film");
const tvSeries = filterMovies([], "TvSeries");
