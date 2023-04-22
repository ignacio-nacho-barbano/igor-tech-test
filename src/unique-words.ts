console.log('Welcome to the technical exercise #2: findUniqueWords');
console.log();

/*
  This function was implemented assuming we don't want to just use
  the JS native way for this excercise which would be
  export const findUniqueWords = (words: string[]) => [...(new Set(words))];
*/

export const findUniqueWords = (words: string[]) => {
  const uniqueWords: string[] = [];
  let pendingToCompare = [...words];

  while (pendingToCompare.length) {
    const comparing = pendingToCompare.shift()!;
    const initialCount = pendingToCompare.length;

    pendingToCompare = pendingToCompare.filter((word) => word !== comparing);

    if (pendingToCompare.length === initialCount) {
      uniqueWords.push(comparing);
    }
  }

  return uniqueWords;
};

// Code below has the only purpose of showing some examples on the console
const examples: string[][] = [
  ['mono'],
  ['mono', 'mono'],
  ['rhcp', 'muse'],
  ['rhcp', 'muse', 'rhcp'],
  ['rhcp', 'muse', 'rhcp', 'muse'],
  ['rhcp', 'muse', 'rhcp', 'soundgarden'],
  ['audio', 'video', 'radio', 'internet'],
  [
    '💩',
    '💩',
    '💩',
    '💩',
    '🌎',
    '🌳',
    '🦖',
    '💩',
    '🦖',
    '💩',
    '🦖',
    '💩',
    '🦖',
  ],
];

examples.forEach((example, i) => {
  const unique = findUniqueWords(example);

  console.log(`given the array n#${i} being:`);
  console.log(example);

  if (unique.length > 1) {
    console.log('the following words', unique, 'are unique');
  } else if (unique.length === 1) {
    console.log('the following word', unique, 'is unique');
  } else {
    console.log('no words are unique in this array');
  }
  console.log();
});
