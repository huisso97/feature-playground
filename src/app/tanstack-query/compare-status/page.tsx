'use client';

import { useGetPostsQuery } from '@/query/post';

const CompareStatus = () => {
  const { data, isLoading, isError, error, isFetching, isPending } =
    useGetPostsQuery({
      onSuccess: () => console.log('데이터 불러오기 성공'),
      onError: () => console.error('데이터 불러오기 실패'),
    });

  // 로딩 상태
  if (isLoading) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  // 에러 처리
  if (isError) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  // 데이터가 로딩 중일 때 (리패칭 포함)
  if (isFetching && !isLoading) {
    return <div>데이터를 새로 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <h2>TanstackQuery 데이터</h2>
      {/* 데이터가 있을 경우 출력 */}
      {data ? (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default CompareStatus;
