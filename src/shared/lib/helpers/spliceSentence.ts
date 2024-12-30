export function spliceSentence(sentence: string, lenght: number): string {
  if (sentence.length > lenght) {
    return sentence.slice(0, lenght) + "...";
  }
  return sentence;
}
