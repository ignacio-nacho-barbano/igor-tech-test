console.log("Welcome to the technical exercise #2: findUniqueWords");
console.log();

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
  ["pepe", "ramon"],
  ["pepe", "ramon", "pepe"],
  ["pepe", "ramon", "pepe", "ramon"],
  ["pepe", "ramon", "pepe", "otra"],
  ["audio", "video", "radio", "internet"],
  [
    "audio",
    "audio",
    "audio",
    "audio",
    "video",
    "radio",
    "internet",
    "audio",
    "internet",
    "audio",
    "internet",
    "audio",
    "internet",
  ],
];

examples.forEach((example, i) => {
  const unique = findUniqueWords(example);

  console.log(`given the array n#${i} being the following: `, example);
  unique.length ? console.log("the words", unique) : console.log("no words");
  console.log();
});
