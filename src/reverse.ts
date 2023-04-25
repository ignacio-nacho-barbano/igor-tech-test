console.log('Welcome to the technical exercise #1: reverseText');
console.log();

let executing = true;

type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR['length']
    >;
/*
🔼 This I got from https://dev.to/tylim88/typescript-numeric-range-type-15a5
as I understand there's no native way for TS to restrict numbers to a certain range for
the ASCII codes of the english sub-set
*/

/**
 * Valid ASCII ENG lang codes are numbers in the range 32-127
 */
export type EngLangByte = NumericRange<32, 127>;

/*
  This function was implemented assuming we don't want to just use
  the JS native way for this exercise which would be
  export const reverseText = (array: EngLangByte[]) => array.reverse();
*/

export const letterToAsciiCodeByte = (letter: string) =>
  letter.charCodeAt(0) as EngLangByte;

export const asciiCodeByteToLetter = (byte) => String.fromCharCode(byte);

export const stringToByteArray = (text: string): EngLangByte[] => {
  return text.split('').map(letterToAsciiCodeByte);
};

export const byteArrayToString = (array: EngLangByte[]): string => {
  return array.map(asciiCodeByteToLetter).join('');
};

export const reverseArray = <T>(array: T[]): T[] => {
  const iterations = Math.floor(array.length / 2) - 1;
  let iteratorSimetry = array.length;

  for (let i = 0; i <= iterations; i++) {
    iteratorSimetry--;

    const byteA = array[i];
    const byteB = array[iteratorSimetry];

    array[i] = byteB;
    array[iteratorSimetry] = byteA;
  }

  return array;
};

export const reverseTextUsingByteFormat = (text: string) => {
  if (!text) return text;
  /* The following comments are here just to showcase data transformation for a given text */

  // text = I'm nacho
  let biteArrayWithoutSpaces = stringToByteArray(text).join(' ').split(' 32 ');
  // [ '73 39 109', '110 97 99 104 111' ]
  reverseArray(biteArrayWithoutSpaces);
  // [ '110 97 99 104 111', '73 39 109' ]

  const finalByteArray = biteArrayWithoutSpaces
    .join(' 32 ')
    // '110 97 99 104 111 32 73 39 109'
    .split(' ')
    // ['110','97','99','104','111','32','73','39','109']
    .map((num) => +num as EngLangByte);
  // [110,97,99,104,111,32,73,39,109]

  return byteArrayToString(finalByteArray);
  // nacho I'm
};

console.log(
  reverseTextUsingByteFormat('my email is ignaciobarbarno@gmail.com')
);

// Code below has the only purpose of showing some examples on the console
// const examples: string[] = [
//   'monkey',
//   'the monkey',
//   'the monkey jumped to the three',
//   'oddly      spaced',
// ];

// examples.forEach((text, i) => {
//   console.log('Initial array n#', i, ' is ', text);
//   console.log('reversed it looks like this ', reverseText(text));
//   console.log();
// });

// const text = 'my email is ignaciobarbarno@gmail.com';

// console.log(stringToByteArray(text));
