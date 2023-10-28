import { describe, it, expect } from "vitest";
import { getFirsTPlanetName } from "../exercises/e0-example";
import { data } from "../data/data";

describe("geTPlanetNames", () => {
  it("Should exist", () => {
    expect(getFirsTPlanetName).toBeInstanceOf(Function);
  });
  it("Should give me an array of the planet names", () => {
    expect(getFirsTPlanetName(data)).toEqual("Uranus");
  });
});
