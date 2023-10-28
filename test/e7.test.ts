import { describe, expect, it } from "vitest";
import { geTPlanetsWithMoons } from "../exercises/e7";
import { data } from "../data/data";

describe("geTPlanetsWithMoons", () => {
  it("should exist", () => {
    expect(geTPlanetsWithMoons).toBeInstanceOf(Function);
  });
  it("There should be 6 items", () => {
    expect(geTPlanetsWithMoons(data.planets).length).toEqual(6);
  });
  it("Should give me an array of the planet names", () => {
    expect(geTPlanetsWithMoons(data.planets)).toEqual([
      "Uranus",
      "Neptune",
      "Jupiter",
      "Mars",
      "Saturne",
      "Earth",
    ]);
  });
});
