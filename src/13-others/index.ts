type FilmGenre = "horror" | "comedy" | "adventure" | "action";

export const FilmAgeRestriction: Record<FilmGenre, number> = {
  adventure: 12,
  comedy: 6,
  horror: 18,
  action: 16,
};

type FieldType = "input" | "select" | "multiselect";

type MyRecord = {
  [fieldName: string]: {
    fieldType: FieldType;
  };
};

const config: MyRecord = {
  a: { fieldType: "input" },
  b: { fieldType: "input" },
  c: { fieldType: "input" },
  d: { fieldType: "input" },
  e: { fieldType: "input" },
};

function calculate(value: string): string;
function calculate(a: string, b?: number | string): string {
  return a + b;
}

// Errors

try {
  throw "";
  throw null;
} catch (error) {
  if (isError(error)) {
    console.log(error.message);
  }
}

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

window.playVideo();
ENV;
