import es from "./es";
import en from "./en";
import { languages } from "./site";

const dictionaries = { es, en };

export function isLang(value) {
  return languages.includes(value);
}

export function getDict(lang) {
  return dictionaries[lang] ?? dictionaries.es;
}
