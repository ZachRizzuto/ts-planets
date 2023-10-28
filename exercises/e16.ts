// see e16.md

import { Type } from "typescript";

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find(array: unknown[], callback: (item: unknown) => boolean) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}
