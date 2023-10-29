// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAsteroid } from "../types";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: TAsteroid[]) {
  let yearCount = new Map<number, number>();

  asteroids.forEach(function ({ discoveryYear }) {
    if (yearCount.get(discoveryYear)) {
      let oldVal = yearCount.get(discoveryYear);
      oldVal && yearCount.set(discoveryYear, (oldVal += 1));
    } else {
      yearCount.set(discoveryYear, 1);
    }
  });

  const mostAsteroidDiscoveredYear = maxBy(
    [...yearCount.entries()],
    (entry) => entry[1]
  );

  if (mostAsteroidDiscoveredYear) return mostAsteroidDiscoveredYear[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
