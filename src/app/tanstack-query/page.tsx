import React from 'react';

import ListCard from '@/components/common/list-card';

const TanstackQuery = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ListCard
        href='/tanstack-query/compare-status'
        title='Compare Status'
        description={
          <>
            isFetching, isLoading, isPending, isRefetching, isRefetchError,
            isSuccess
            <br />
            차이점
          </>
        }
      />
    </div>
  );
};

export default TanstackQuery;
