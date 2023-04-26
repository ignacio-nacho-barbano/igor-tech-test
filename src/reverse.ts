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

export const reverseArray = <T>(array: T[]) => {
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

export const reverseByteSentence = (bytes: EngLangByte[]) => {
  const groupedByWords = bytes
    .join(' ')
    // '1 2 32 4'
    .split(' 32 ');
  // ['1 2','4']

  // inverts the order of the words in the sentence
  reverseArray(groupedByWords);
  // ['4','1 2']

  // and returns them in the original format
  return (
    groupedByWords
      .join(' 32 ')
      // '4 32 1 2'
      .split(' ')
      // '['4','32','1','2']
      .map((num) => +num as EngLangByte)
    // '[4,32,1,2]
  );
};

// These two functions are the main ones to be called to solve the original premise
export const inverAndCodifySentence = (text: string): EngLangByte[] => {
  return text ? reverseByteSentence(stringToByteArray(text)) : [];
};

export const decodifyInvertedSentence = (bytes: EngLangByte[]) => {
  return bytes.length ? byteArrayToString(reverseByteSentence(bytes)) : '';
};
