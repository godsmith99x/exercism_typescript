export enum planetRatios {
  "earth" = 1.0,
  "mercury" = 0.2408467,
  "venus" = 0.61519726,
  "mars" = 1.8808158,
  "jupiter" = 11.862615,
  "saturn" = 29.447498,
  "uranus" = 84.016846,
  "neptune" = 164.79132,
}

type PlanetRatio = keyof typeof planetRatios;

export function age(planet: PlanetRatio, seconds: number): number {
  let earthYears = seconds / 31557600;
  let ans = (earthYears / planetRatios[planet]).toFixed(2);
  return parseFloat(ans);
}
