import React from 'react';

import ListCard from '@/components/common/list-card';

const ReactFeature = () => {
  return (
    <div className='list-container'>
      <ListCard
        href='/react-feature/compare-effects'
        title='Compare Effects'
        description={
          <>
            useEffect와 useLayoutEffect
            <br />
            차이점
          </>
        }
      />
    </div>
  );
};

export default ReactFeature;
