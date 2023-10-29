export function minBy<T, R>(array: T[], cb: (item: T) => R): T | undefined {
  let returnValueMin: T | undefined;
  let min: R | undefined | null = undefined;

  if (array.length > 0 && array[0]) {
    min = cb(array[0]);

    for (let i of array) {
      const result = cb(i);

      if (result !== undefined && result !== null) {
        if (min === undefined || min === null || result < min) {
          min = result;
          returnValueMin = i;
        }
      }
    }
  } else {
    return undefined;
  }

  return returnValueMin;
}

export function maxBy<T, R>(array: T[], cb: (item: T) => R) {
  let returnValueMax: T | undefined;
  let max: R;

  if (array.length > 0 && array[0]) {
    max = cb(array[0]);

    for (let i of array) {
      const result = cb(i);

      if (result !== undefined) {
        if (
          max === undefined ||
          (max !== null && result !== null && result > max)
        ) {
          max = result;
          returnValueMax = i;
        }
      }
    }
  }

  return returnValueMax;
}
