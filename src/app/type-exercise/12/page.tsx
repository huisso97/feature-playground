'use client';

import {
  getAverageValue,
  getMaxElement,
  getMedianElement,
  getMinElement,
} from '@/lib/stats';

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  {
    type: 'user',
    name: '김철수',
    age: 25,
    occupation: 'CEO',
  },
  { type: 'user', name: '이영희', age: 23, occupation: '교사' },
  { type: 'user', name: '박영수', age: 70, occupation: '의사' },
  { type: 'user', name: '최영준', age: 28, occupation: '일반인' },
  { type: 'user', name: '이영준', age: 31, occupation: '개발자' },
];

const compareByAge = <T extends { age: number }>(a: T, b: T) => a.age - b.age;

/**
 * @see https://typescript-exercises.github.io/#exercise=12&file=%2Findex.ts
 */
const StatsComponent = () => {
  const youngestUser = getMinElement(users, compareByAge);
  const oldestUser = getMaxElement(users, compareByAge);
  const medianUser = getMedianElement(users, compareByAge);
  const averageUserAge = getAverageValue(users, user => user.age);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>사용자 통계</h1>
      <section>
        <h2 className='text-lg font-bold'>가장 어린 사용자</h2>
        {youngestUser ? (
          <p>
            {youngestUser.name} ({youngestUser.age}세) -{' '}
            {youngestUser.occupation}
          </p>
        ) : (
          <p>데이터 없음</p>
        )}
      </section>
      <section>
        <h2 className='text-lg font-bold'>가장 나이 많은 사용자</h2>
        {oldestUser ? (
          <p>
            {oldestUser.name} ({oldestUser.age}세) - {oldestUser.occupation}
          </p>
        ) : (
          <p>데이터 없음</p>
        )}
      </section>
      <section>
        <h2 className='text-lg font-bold'>중앙값 사용자</h2>
        {medianUser ? (
          <p>
            {medianUser.name} ({medianUser.age}세) - {medianUser.occupation}
          </p>
        ) : (
          <p>데이터 없음</p>
        )}
      </section>
      <section>
        <h2 className='text-lg font-bold'>평균 사용자 나이</h2>
        <p>
          {averageUserAge !== null
            ? `${averageUserAge.toFixed(1)}세`
            : '데이터 없음'}
        </p>
      </section>
    </div>
  );
};

export default StatsComponent;
