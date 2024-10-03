/**
 * @see https://typescript-exercises.github.io/#exercise=11&file=%2Fnode_modules%2Fstr-utils%2Findex.js
 */

type StrUtils = (value: string) => string;

/**
 * strReverse: 문자열을 역순 처리.
 * strToLower: 문자열을 소문자로 변환.
 * strToUpper: 문자열을 대문자로 변환.
 * strRandomize: 문자열의 문자를 무작위로 섞음.
 * strInvertCase: 문자열의 각 문자의 대소문자를 반전시킴.
 */

export const strReverse: StrUtils = value => value.split('').reverse().join('');
export const strToLower: StrUtils = value => value.toLowerCase();
export const strToUpper: StrUtils = value => value.toUpperCase();
export const strRandomize: StrUtils = value => {
  const array = value.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join('');
};
export const strInvertCase: StrUtils = value =>
  value
    .split('')
    .map(function (c) {
      if (c === c.toLowerCase()) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join('');
