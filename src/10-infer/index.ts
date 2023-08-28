import { BaseMovie } from "../06-generics";

let movie = "132";
movie = "";
movie = "123";
// movie = 123;

function sum(a: number, b: number): number {
  if (a > 2) {
    return b;
  }

  return a + b;
}

export function getProperty<
  Obj extends object,
  Key extends keyof Obj = keyof Obj
>(obj: Obj, key: Key): Obj[Key] {
  return obj[key];
}

getProperty({ a: "", b: "" }, "a");

function call<Arguments extends any[], ReturnValue>(
  functionToCall: (...args: Arguments) => ReturnValue,
  ...args: Arguments
): ReturnValue {
  return functionToCall(...args);
}

type ShortMovie = Omit<BaseMovie, "title" | "director">;

type Size = "xxs" | "xs" | "s" | "m" | "l";

type SmallSize = Exclude<Size, "m" | "l">;
type SmallSize2 = Extract<Size, "xxs" | "xs" | "s">;

call(
  (a: string, b: string) => {
    return a + b;
  },
  "",
  ""
);

type MyReturnType<Function extends (...args: any) => any> = Function extends (
  ...args: any
) => infer ReturnType
  ? ReturnType
  : never;

function sum2(a: number, b: number): number {
  return a + b;
}

type FunctionReturnType = MyReturnType<typeof sum2>;
type GetPropertyReturnType = MyReturnType<
  typeof getProperty<{ a: string; b: number }, "a">
>;

type MyParameters<Function extends (...args: any) => any> = Function extends (
  ...args: infer Parameters
) => any
  ? Parameters
  : never;

type GetComponentProps<Function extends (...args: any) => any> =
  Function extends (props: infer Props, ...args: any) => any ? Props : never;

type GetTypename<Entity extends { __typename: any }> = Entity extends {
  __typename: infer Typename;
}
  ? Typename
  : never;

const Film: { __typename: "Film"; title: string } = {
  __typename: "Film",
  title: "",
};

type test = (typeof Film)["__typename"];

type FilmTypename = GetTypename<typeof Film>;
