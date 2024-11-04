import { useQuery } from '@tanstack/react-query';

import { queryKeys } from './queryKeyStore';

const useGetPostsQuery = ({ onSuccess }: { onSuccess: () => void }) => {
  return useQuery({
    queryKey: queryKeys.post.list().queryKey,
    queryFn: queryKeys.post.list().queryFn,
    meta: { onSuccess },
  });
};

export { useGetPostsQuery };
