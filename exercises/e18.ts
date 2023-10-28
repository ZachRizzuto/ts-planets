// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAsteroid } from "../types";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: TAsteroid[]) {
  let yearCount = new Map<number, number>();

  const asteroidYearArr = asteroids.map(function (asteroid) {
    return asteroid.discoveryYear;
  });

  asteroidYearArr.forEach(function (i: number) {
    if (yearCount.get(i)) {
      let oldVal = yearCount.get(i);
      oldVal && yearCount.set(i, (oldVal += 1));
    } else {
      yearCount.set(i, 1);
    }
  });

  const yearAppearancesCount = Array.from(yearCount.keys()).map((key) =>
    yearCount.get(key)
  );

  const maxOfAsteroidsDiscoveryYearAppearances = maxBy(
    yearAppearancesCount,
    (item) => item
  );

  const mostAsteroidDiscoveredYear = asteroidYearArr.find(
    (year) => yearCount.get(year) == maxOfAsteroidsDiscoveryYearAppearances
  );

  return mostAsteroidDiscoveredYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
