import { describe, expect, it } from "vitest";
import { geTPlanetNamesWithLowGravity } from "../exercises/e4";
import { data } from "../data/data";

describe("geTPlanetsWithLowGravity", () => {
  it("should exist", () => {
    expect(geTPlanetNamesWithLowGravity).toBeInstanceOf(Function);
  });
  it("There should be 5 planets", () => {
    expect(geTPlanetNamesWithLowGravity(data.planets).length).toEqual(5);
  });
  it("should give me an array of all the planet names", () => {
    expect(geTPlanetNamesWithLowGravity(data.planets)).toEqual([
      "Uranus",
      "Mars",
      "Mercure",
      "Earth",
      "Vénus",
    ]);
  });
});
