export function hey(message: string): string {
  const answers: string[] = [
    "Whatever.",
    "Sure.",
    "Whoa, chill out!",
    "Calm down, I know what I'm doing!",
  ];

  const speech = message.trim();

  if (speech === "") return "Fine. Be that way!";

  const isQuestion: number = speech.endsWith("?") ? 1 : 0;
  const isShout: number =
    /[A-Z]+/.test(speech) && speech === speech.toUpperCase() ? 2 : 0;

  return answers[isQuestion + isShout];
}
