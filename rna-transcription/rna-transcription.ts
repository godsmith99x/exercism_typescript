export function toRna(dna: string): string {
  return dna
    .split("")
    .map((nucleotide: string) => {
      switch (nucleotide) {
        case "C":
          return "G";
        case "G":
          return "C";
        case "A":
          return "U";
        case "T":
          return "A";
      }
      throw new Error("Invalid input DNA.");
    })
    .join("");
}
