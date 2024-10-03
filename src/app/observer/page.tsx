'use client';

import ObserverList from '@/components/observer/observer-list';
import { useGetPostsQuery } from '@/query/post';

const Observer = () => {
  const { data } = useGetPostsQuery();
  return (
    <div>
      <ObserverList data={data} />
    </div>
  );
};

export default Observer;
