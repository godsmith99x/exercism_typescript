export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let rolls: number[] = new Array(4);

    for (let i = 0; i < rolls.length; i++) {
      rolls[i] = Number(Math.floor(Math.random() * 6 + 1));
    }

    let min = Math.min(...rolls);

    let abilityScore = rolls.reduce((m, n) => m + n, 0) - min;

    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    return Number(Math.floor((abilityValue - 10) / 2));
  }
}
