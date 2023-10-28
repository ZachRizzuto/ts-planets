// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets

import { TAllData } from "../types";

// Return example: 42
export const allPlanetsMoonsCount = (data: TAllData) => {
  return data.planets.reduce(
    (acc, planet) =>
      planet.moonsCount ? (acc += planet.moonsCount) : (acc += 0),
    0
  );
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
