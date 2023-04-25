import {
  reverseTextUsingByteFormat,
  letterToAsciiCodeByte,
  asciiCodeByteToLetter,
  byteArrayToString,
  stringToByteArray,
  EngLangByte,
} from '../src/reverse';
import { findUniqueWords } from '../src/unique-words';

const asciiEmail: EngLangByte[] = [
  105, 103, 110, 97, 99, 105, 111, 64, 98, 97, 114, 98, 97, 110, 111, 46, 99,
  111, 109, 32, 105, 115, 32, 109, 121, 32, 101, 109, 97, 105, 108,
];

describe('letterToAsciiCodeByte function', () => {
  it('should transform letters to the expected ascii byte representation', () => {
    expect(letterToAsciiCodeByte(' ')).toEqual(32);
    expect(letterToAsciiCodeByte('0')).toEqual(48);
    expect(letterToAsciiCodeByte('.')).toEqual(46);
    expect(letterToAsciiCodeByte('[')).toEqual(91);
    expect(letterToAsciiCodeByte('~')).toEqual(126);
  });
});

describe('letterToAsciiCodeByte function', () => {
  it('should transform letters to the expected ascii byte representation', () => {
    expect(asciiCodeByteToLetter(32)).toEqual(' ');
    expect(asciiCodeByteToLetter(48)).toEqual('0');
    expect(asciiCodeByteToLetter(46)).toEqual('.');
    expect(asciiCodeByteToLetter(91)).toEqual('[');
    expect(asciiCodeByteToLetter(126)).toEqual('~');
  });
});

describe('byteArrayToString function', () => {
  it('should take in a byte array and return it as a string value', () => {
    expect(byteArrayToString(asciiEmail)).toEqual(
      'ignacio@barbano.com is my email'
    );
  });
});

describe('stringToByteArray function', () => {
  it('should take in a byte array and return it as a string value', () => {
    expect(stringToByteArray('ignacio@barbano.com is my email')).toEqual(
      asciiEmail
    );
  });
});

describe('letterToAsciiCodeByte function', () => {
  it('should transform letters to the expected ascii byte representation', () => {
    expect(asciiCodeByteToLetter(32)).toEqual(' ');
    expect(asciiCodeByteToLetter(48)).toEqual('0');
    expect(asciiCodeByteToLetter(46)).toEqual('.');
    expect(asciiCodeByteToLetter(91)).toEqual('[');
    expect(asciiCodeByteToLetter(126)).toEqual('~');
  });
});

describe('reverseTextUsingByteFormat function', () => {
  it('it should reverses a string with an even count of words', () => {
    expect(reverseTextUsingByteFormat('the monkey is weird')).toEqual(
      'weird is monkey the'
    );
  });

  it('it should reverses a string with an odd count of words', () => {
    expect(reverseTextUsingByteFormat('the monkey jumped')).toEqual(
      'jumped monkey the'
    );
  });

  it('it should not throw given a single element', () => {
    expect(reverseTextUsingByteFormat('monkey')).toEqual('monkey');
  });

  it('it should not throw given an empty string', () => {
    expect(reverseTextUsingByteFormat('')).toEqual('');
  });
});

describe('findUniqueWords function', () => {
  it('it should not throw given an empty string', () => {
    expect(findUniqueWords('')).toEqual([]);
  });

  it('it should not throw given a single word', () => {
    expect(findUniqueWords('audio')).toEqual(['audio']);
  });

  it('it should return all of the words in the array if the string does not contain any repeated word', () => {
    expect(findUniqueWords('audio radio video')).toEqual([
      'audio',
      'radio',
      'video',
    ]);
  });

  it('it should return an empty array given there are no unique words', () => {
    expect(findUniqueWords('audio radio video audio radio video')).toEqual([]);
  });
  it('it should return only the words that do not repeat given any sort of repetitions', () => {
    expect(
      findUniqueWords('audio audio audio internet radio vide internet')
    ).toEqual(['radio', 'vide']);
  });
});
