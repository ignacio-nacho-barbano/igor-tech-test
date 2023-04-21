import assert from "node:assert";
import { describe } from "node:test";
import { reverseArray } from "../src/reverse.js";
import { findUniqueWords } from "../src/unique-words.js";

describe("reverseArray function", () => {
  assert.strictEqual(
    reverseArray([55, 32, 44, 58, 127, 99]).toString(),
    [99, 127, 58, 44, 32, 55].toString(),
    `it should reverses a set of bytes with an even count of elements`
  );

  assert.strictEqual(
    reverseArray([55, 32, 44, 70, 58, 127, 99]).toString(),
    [99, 127, 58, 70, 44, 32, 55].toString(),
    `it should reverses a set of bytes with an odd count of elements`
  );

  assert.strictEqual(
    reverseArray([44]).toString(),
    [44].toString(),
    `it should not throw given a single element`
  );

  assert.strictEqual(
    reverseArray([]).toString(),
    [].toString(),
    `it should not throw given an empty array`
  );
});

describe("findUniqueWords function", () => {
  assert.strictEqual(
    findUniqueWords([]).toString(),
    [].toString(),
    `it should not throw given an empty array`
  );

  assert.strictEqual(
    findUniqueWords(["audio"]).toString(),
    ["audio"].toString(),
    `it should return the whole array if the array contains only one word`
  );

  assert.strictEqual(
    findUniqueWords(["audio", "radio", "video"]).toString(),
    ["audio", "radio", "video"].toString(),
    `it should return the whole array if it does not contain any repeated word`
  );

  assert.strictEqual(
    findUniqueWords(["audio", "radio", "video"]).toString(),
    ["audio", "radio", "video"].toString(),
    `it should return the whole array if it does not contain any repeated word`
  );

  assert.strictEqual(
    findUniqueWords([
      "audio",
      "radio",
      "video",
      "audio",
      "radio",
      "video",
    ]).toString(),
    [].toString(),
    `it should return an empty array given there are no unique words`
  );

  assert.strictEqual(
    findUniqueWords([
      "audio",
      "audio",
      "audio",
      "internet",
      "radio",
      "vide",
      "internet",
    ]).toString(),
    [["radio", "vide"]].toString(),
    "it should return only the words that do not repeat given any sort of repetitions"
  );
});
