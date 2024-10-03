/**
 * @see https://typescript-exercises.github.io/#exercise=12&file=%2Fnode_modules%2Fstats%2Findex.js
 */

type Comparator<T> = (a: T, b: T) => number;

type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
type GetAverageValue = <T>(
  input: T[],
  getValue: (item: T) => number,
) => number | null;

export const getMaxIndex: GetIndex = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[i], input[maxIndex]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

export const getMaxElement: GetElement = (input, comparator) => {
  var index = getMaxIndex(input, comparator);
  return index === -1 ? null : input[index];
};

export const getMinIndex: GetIndex = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[maxIndex], input[i]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

export const getMinElement: GetElement = (input, comparator) => {
  var index = getMinIndex(input, comparator);
  return index === -1 ? null : input[index];
};

export const getMedianIndex: GetIndex = (input, comparator) => {
  if (input.length === 0) {
    return -1;
  }
  var data = input.slice().sort(comparator);
  return input.indexOf(data[Math.floor(data.length / 2)]);
};

export const getMedianElement: GetElement = (input, comparator) => {
  var index = getMedianIndex(input, comparator);
  return index === -1 ? null : input[index];
};

export const getAverageValue: GetAverageValue = (input, getValue) => {
  if (input.length === 0) {
    return null;
  }
  return (
    input.reduce(function (result, item) {
      return result + getValue(item);
    }, 0) / input.length
  );
};
