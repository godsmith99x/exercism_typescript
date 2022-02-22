export function isLeap(year: number): boolean {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
