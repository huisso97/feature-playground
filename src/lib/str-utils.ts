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
  const arr = value.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
};
export const strInvertCase: StrUtils = value =>
  value.replace(/[a-zA-Z]/g, char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
  );
