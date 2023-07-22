export function extractFirstTwoSentences(text: string) {
  if (!text) {
    return; // Or any default value you prefer when 'text' is null or empty
  }
  const sentences = text.split(".").map((sentence) => sentence.trim() + ".");

  let selectedSentences = "";
  let sentenceCount = 0;

  for (const sentence of sentences) {
    if (text === null || text === undefined) {
      return "";
    } else if (sentenceCount >= 2) {
      break;
    }

    selectedSentences += sentence + " ";
    sentenceCount++;
  }

  const displaySentences = selectedSentences.trim();

  return displaySentences;
}
