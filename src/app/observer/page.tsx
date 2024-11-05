'use client';

import { useGetPostsQuery } from '@/query/post';

import ObserverList from './_components';

const Observer = () => {
  const { data, isFetching } = useGetPostsQuery({
    onSuccess: () => alert('1'),
  });

  return (
    <div>
      {isFetching ? (
        <div>데이터를 불러오는 중입니다...</div>
      ) : (
        <ObserverList data={data ?? []} />
      )}
    </div>
  );
};

export default Observer;
