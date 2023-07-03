export function extractFirstTwoSentences(text: string) {
  const sentences = text.split(".").map((sentence) => sentence.trim() + ".");

  let selectedSentences = "";
  let sentenceCount = 0;

  for (const sentence of sentences) {
    if (sentenceCount >= 2) {
      break;
    }

    selectedSentences += sentence + " ";
    sentenceCount++;
  }

  const displaySentences = selectedSentences.trim();

  return displaySentences;
}
