export function isPangram(phrase: string): boolean {
  if (!phrase) {
    return false;
  } else {
    let comparator = new Set("abcdefghijklmnopqrstuvwxyz");
    let testCase = new Set(phrase.replace(/\s/g, "").toLowerCase());

    let diff = new Set([...comparator].filter((value) => !testCase.has(value)));

    return diff.size === 0;
  }
}
