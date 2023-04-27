import {
  letterToAsciiCodeByte,
  asciiCodeByteToLetter,
  byteArrayToString,
  stringToByteArray,
  EngLangByte,
  reverseArray,
  reverseByteSentence,
  inverAndCodifySentence,
  decodifyInvertedSentence,
} from '../src/reverse';
import { countUniqueWords } from '../src/unique-words';

const emailSentence = 'my email is ignaciobarbano@gmail.com!';
const codifiedEmailSentence: EngLangByte[] = [
  109, 121, 32, 101, 109, 97, 105, 108, 32, 105, 115, 32, 105, 103, 110, 97, 99,
  105, 111, 98, 97, 114, 98, 97, 110, 111, 64, 103, 109, 97, 105, 108, 46, 99,
  111, 109, 33,
];
const invertedEmailSentence = 'ignaciobarbano@gmail.com! is email my';
const invertedCodifiedEmailSentence: EngLangByte[] = [
  105, 103, 110, 97, 99, 105, 111, 98, 97, 114, 98, 97, 110, 111, 64, 103, 109,
  97, 105, 108, 46, 99, 111, 109, 33, 32, 105, 115, 32, 101, 109, 97, 105, 108,
  32, 109, 121,
];

describe('Exercise #1', () => {
  describe('reverseArray function', () => {
    it('should reverse an array with and odd amount of elements', () => {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('should reverse an array with and even amount of elements', () => {
      expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    it('should not throw given an empty array', () => {
      expect(reverseArray([])).toEqual([]);
    });

    it('should not throw given an single element', () => {
      expect(reverseArray([1])).toEqual([1]);
    });
  });

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

  describe('stringToByteArray function', () => {
    it('should take in a byte array and return it as a string value', () => {
      expect(stringToByteArray(emailSentence)).toEqual(codifiedEmailSentence);
    });

    it(`should return a number of bytes equivalent to the original string's length`, () => {
      expect(stringToByteArray(emailSentence).length).toEqual(
        emailSentence.length
      );
    });

    it('should take in an empty string and return an empty array', () => {
      expect(stringToByteArray('')).toEqual([]);
    });
  });

  describe('byteArrayToString function', () => {
    it('should take in a byte array and return it as a string value', () => {
      expect(byteArrayToString(codifiedEmailSentence)).toEqual(emailSentence);
    });

    it('should take in an empty array and return it an empty string', () => {
      expect(byteArrayToString([])).toEqual('');
    });
  });

  describe('reverseByteSentence function', () => {
    it('it should take in a byte sentence and reverse its order', () => {
      const result = reverseByteSentence(codifiedEmailSentence);
      expect(byteArrayToString(result)).toEqual(invertedEmailSentence);
    });
  });

  describe('inverAndCodifySentence function', () => {
    it('it receive a sentence, codify it and invert it', () => {
      const result = inverAndCodifySentence(emailSentence);

      expect(result).toEqual(invertedCodifiedEmailSentence);
    });

    it('it should not throw given a single element', () => {
      const result = inverAndCodifySentence('monkey');

      expect(result).toEqual([109, 111, 110, 107, 101, 121]);
      expect(byteArrayToString(result)).toEqual('monkey');
    });

    it('it should not throw given an empty string', () => {
      const result = inverAndCodifySentence('');

      expect(result).toEqual([]);
      expect(byteArrayToString(result)).toEqual('');
    });
  });

  describe('decodifyInvertedSentence function', () => {
    it('it should take in a byte sentence that is reverted and decode it to the original message', () => {
      const result = decodifyInvertedSentence(invertedCodifiedEmailSentence);
      expect(result).toEqual(emailSentence);
    });

    it('it should not throw given an emtpy array', () => {
      const result = decodifyInvertedSentence([]);

      expect(result).toEqual('');
    });
  });

  describe('inverAndCodifySentence and decodifyInvertedSentence working together', () => {
    it('should be a functional workflow to use both functions together to codify and decodify', () => {
      const sentence = "This is Nacho's Tech Interview Tests";
      const codified = inverAndCodifySentence(sentence);
      expect(decodifyInvertedSentence(codified)).toEqual(sentence);
    });

    it('should be not throw given an empty string', () => {
      const sentence = '';
      const codified = inverAndCodifySentence(sentence);
      expect(decodifyInvertedSentence(codified)).toEqual(sentence);
    });
  });
});

describe('Exercise #2', () => {
  describe('countUniqueWords function', () => {
    it('it should not throw given an empty string', () => {
      expect(countUniqueWords('')).toEqual(0);
    });

    it('it should not throw given a single word', () => {
      expect(countUniqueWords('audio')).toEqual(1);
    });

    it('it should count all different words', () => {
      expect(countUniqueWords('audio      #radio  video')).toEqual(3);
    });

    it('it should count all different words no matter how many times they repeat or in which variation', () => {
      expect(
        countUniqueWords(
          'audio radio video audio monster monster.monster@monster #MONSTER% radio video'
        )
      ).toEqual(4);
    });
  });
});
