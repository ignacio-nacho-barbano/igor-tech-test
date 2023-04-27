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

export const reverseArray = <T>(
  array: T[],
  segmentStart?: number | null,
  segmentEnd?: number | null
) => {
  const start = segmentStart || 0;
  const end = segmentEnd + 1 || array.length;
  const totalIterations = Math.floor((end - start) / 2);

  let iteratorSimetry = end;
  let iterations = 0;

  for (let index = start; iterations < totalIterations; index++) {
    iterations++;
    iteratorSimetry--;

    const elementA = array[index];
    const elementB = array[iteratorSimetry];

    array[index] = elementB;
    array[iteratorSimetry] = elementA;
  }

  return array;
};

export const reverseByteSentence = (bytes: EngLangByte[]) => {
  let wordStart = null;

  for (let i = 0; i < bytes.length; i++) {
    const nextChar = bytes[i + 1];
    const isLastCharInWord = i + 1 === bytes.length || nextChar === 32;

    if (wordStart === null && bytes[i] !== 32) {
      wordStart = i;
    } else if (wordStart !== null && isLastCharInWord) {
      reverseArray(bytes, wordStart, i);
      wordStart = null;
    }
  }

  reverseArray(bytes);

  return bytes;
};

// These two functions are the main ones to be called to solve the original premise
export const inverAndCodifySentence = (text: string): EngLangByte[] => {
  return text ? reverseByteSentence(stringToByteArray(text)) : [];
};

export const decodifyInvertedSentence = (bytes: EngLangByte[]) => {
  return bytes.length ? byteArrayToString(reverseByteSentence(bytes)) : '';
};
