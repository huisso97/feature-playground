import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { getPostsAPI } from '@/apis/post';

export const queryKeys = createQueryKeyStore({
  post: {
    list: () => ({
      queryKey: ['post', 'list'],
      queryFn: () => getPostsAPI(),
    }),
  },
});
