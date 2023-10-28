import { describe, it, expect } from "vitest";
import { geTPlanetNames } from "../exercises/e1";
import { data } from "../data/data";

describe("geTPlanetNames", () => {
  it("Should exist", () => {
    expect(geTPlanetNames).toBeInstanceOf(Function);
  });
  it("There should be 8 elements", () => {
    expect(geTPlanetNames(data.planets).length).toEqual(8);
  });
  it("Should give me an array of the planet names", () => {
    expect(geTPlanetNames(data.planets)).toEqual([
      "Uranus",
      "Neptune",
      "Jupiter",
      "Mars",
      "Mercure",
      "Saturne",
      "Earth",
      "Vénus",
    ]);
  });
});
