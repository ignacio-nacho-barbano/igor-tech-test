console.log('Welcome to the technical exercise #1: reverseArray');
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
type EngLangByte = NumericRange<32, 127>;

/*
  This function was implemented assuming we don't want to just use
  the JS native way for this exercise which would be
  export const reverseArray = (array: EngLangByte[]) => array.reverse();
*/

export const reverseArray = (array: EngLangByte[]) => {
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

// Code below has the only purpose of showing some examples on the console
const arrays: EngLangByte[][] = [
  [32, 54, 126, 127, 90],
  [34, 32, 100, 99],
  [127, 44, 40],
  [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
];

arrays.forEach((array, i) => {
  console.log('Initial array n#', i, ' is ', array);
  console.log('reversed it looks like this ', reverseArray(array));
  console.log();
});
