/*
  This function was implemented assuming we don't want to just use
  the JS native way for this exercise which would be
  export const findUniqueWords = (words: string[]) => [...(new Set(words))];
*/

export const findUniqueWords = (words: string) => {
  const uniqueWords: string[] = [];
  let pendingToCompare = [...words.split(' ')];

  while (pendingToCompare.length) {
    const comparing = pendingToCompare.shift()!;
    const initialCount = pendingToCompare.length;

    pendingToCompare = pendingToCompare.filter((word) => word !== comparing);

    if (comparing && pendingToCompare.length === initialCount) {
      uniqueWords.push(comparing);
    }
  }

  return uniqueWords;
};
