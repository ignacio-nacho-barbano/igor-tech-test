/*
  This function was implemented assuming we don't want to just use
  the JS native way for this exercise which would be
  export const countUniqueWords = (words: string[]) => [...(new Set(words))];
*/

export const countUniqueWords = (words: string) => {
  const lowercasedWords = words.toLocaleLowerCase();
  const wordsRegex = /(\w+)/g;
  let count = 0;
  let pendingToCount = Array.from(lowercasedWords.match(wordsRegex) || []);

  while (pendingToCount.length) {
    const comparing = pendingToCount.shift()!;
    const initialCount = pendingToCount.length;

    pendingToCount = pendingToCount.filter((word) => word !== comparing);

    if (comparing && pendingToCount.length === initialCount) {
      count++;
    }
  }

  return count;
};
