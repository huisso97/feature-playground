import { useQuery } from '@tanstack/react-query';

import { queryKeys } from './queryKeyStore';

const useGetPostsQuery = () => {
  return useQuery({
    queryKey: queryKeys.post.list().queryKey,
    queryFn: queryKeys.post.list().queryFn,
  });
};

export { useGetPostsQuery };
