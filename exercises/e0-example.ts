import { data } from "../data/data";
import { TAllData } from "../types";

// SPACE DATA SAMPLE EXERCISE 0
// Return the name of the first Planet in the array
// Return example: 'Planet Name'

export function getFirsTPlanetName(data: TAllData) {
  // Your code goes here...
  const planets = data.planets;
  //console.log(planets);
  if (planets.length > 0 && planets[0]) return planets[0].name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-0"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
