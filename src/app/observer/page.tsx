'use client';

import { useGetPostsQuery } from '@/query/post';

import ObserverList from './_components';

const Observer = () => {
  const { data } = useGetPostsQuery();
  return (
    <div>
      <ObserverList data={data} />
    </div>
  );
};

export default Observer;
