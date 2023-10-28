import { describe, expect, it } from "vitest";
import { geTAsteroidDataByName } from "../exercises/e10";
import { data } from "../data/data";

describe("geTAsteroidDataByName", () => {
  it("Should exist", () => {
    expect(geTAsteroidDataByName).toBeInstanceOf(Function);
  });
  it("Should be the object of Asteroid Data", () => {
    expect(
      geTAsteroidDataByName({ allData: data, asteroidName: "624 Hektor" })?.name
    ).toEqual("624 Hektor");
  });
});
