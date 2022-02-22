export enum ResistorValues {
  "black" = 0,
  "brown" = 1,
  "red" = 2,
  "orange" = 3,
  "yellow" = 4,
  "green" = 5,
  "blue" = 6,
  "violet" = 7,
  "grey" = 8,
  "white" = 9,
}

type Color = keyof typeof ResistorValues;

export function decodedResistorValue([first, second, third]: Color[]): string {
  let value = Number(`${ResistorValues[first]}${ResistorValues[second]}`);
  let multiplier = 10 ** ResistorValues[third];

  let total = value * multiplier;

  return total > 1000 ? `${total / 1000} kiloohms` : `${total} ohms`;
}
