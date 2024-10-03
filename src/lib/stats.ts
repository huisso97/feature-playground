type Comparator<T> = (a: T, b: T) => number;

type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
export const getMaxIndex: GetIndex = (input, comparator) => {
  return input.reduce((maxIndex, current, index) => {
    return comparator(input[maxIndex], current) > 0 ? maxIndex : index;
  }, 0);
};
export const getMinIndex: GetIndex = (input, comparator) => {
  return input.reduce((minIndex, current, index) => {
    return comparator(input[minIndex], current) < 0 ? minIndex : index;
  }, 0);
};
export const getMedianIndex: GetIndex = (input, comparator) => {
  const sortedInput = input.sort(comparator);
  const middleIndex = Math.floor(sortedInput.length / 2);
  return middleIndex;
};

type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
export const getMaxElement: GetElement = (input, comparator) => {
  const maxIndex = getMaxIndex(input, comparator);
  return maxIndex !== -1 ? input[maxIndex] : null;
};
export const getMinElement: GetElement = (input, comparator) => {
  const minIndex = getMinIndex(input, comparator);
  return minIndex !== -1 ? input[minIndex] : null;
};
export const getMedianElement: GetElement = (input, comparator) => {
  const medianIndex = getMedianIndex(input, comparator);
  return medianIndex !== -1 ? input[medianIndex] : null;
};

export const getAverageValue = <T>(
  input: T[],
  getValue: (item: T) => number,
) => {
  const sum = input.reduce((acc, item) => acc + getValue(item), 0);
  return sum / input.length;
};
