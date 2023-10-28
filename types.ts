export type TPlanet = {
  id: string;
  name: string;
  isPlanet: boolean;
  mass: { massValue: number; massExponent: number };
  vol: { volValue: number; volExponent: number };
  gravity: number;
  avgTemp: number;
  moonsCount?: number;
  moons?: string[];
};

export type TAsteroid = {
  name: string;
  discoveryYear: number;
  orbitalPeriod: number;
};

export type TAllData = {
  planets: TPlanet[];
  asteroids: TAsteroid[];
};
