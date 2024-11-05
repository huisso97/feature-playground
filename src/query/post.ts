import { useQuery } from '@tanstack/react-query';

import { queryKeys } from './queryKeyStore';

const useGetPostsQuery = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError?: () => void;
}) => {
  return useQuery({
    queryKey: queryKeys.post.list().queryKey,
    queryFn: queryKeys.post.list().queryFn,
    meta: { onSuccess, onError },
  });
};

export { useGetPostsQuery };
