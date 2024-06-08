export type ElementType = {
  name: string;
  locator: string;
}

export type IconType = {
  default: RegExp;
  selected: RegExp;
}

export type ElementRecord = Record<string, ElementType>;
export type IconRecord = Record<string, IconType>;
