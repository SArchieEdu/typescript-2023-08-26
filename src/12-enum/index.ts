export const enum Size {
  s = "s",
  m = "m",
  l = "l",
}

type AlternativeSize = "s" | "m" | "l";

const Sizes = {
  s: "s",
  m: "m",
  llll: "l",
  xl: "xl",
} as const;

type SizeKeys = keyof typeof Sizes;

function getSize(size: AlternativeSize) {}

getSize(Sizes.llll);
