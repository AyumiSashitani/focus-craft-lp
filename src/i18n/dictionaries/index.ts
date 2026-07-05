import type { Locale } from "../config";
import type { Dict } from "../types";
import ja from "./ja";
import en from "./en";
import zh from "./zh";
import ko from "./ko";

export const dictionaries: Record<Locale, Dict> = { ja, en, zh, ko };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
