'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const CompareEffects = () => {
  const [valueForLayoutEffect, setValueForLayoutEffect] = useState(0);
  const [valueForEffect, setValueForEffect] = useState(0);

  useLayoutEffect(() => {
    if (valueForLayoutEffect === 0) {
      setValueForLayoutEffect(10 + Math.random() * 200);
    }
  }, [valueForLayoutEffect]);

  useEffect(() => {
    if (valueForEffect === 0) {
      setValueForEffect(10 + Math.random() * 200);
    }
  }, [valueForEffect]);

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-4'>
        <Button
          onClick={() => setValueForLayoutEffect(0)}
          className='w-[300px]'
        >
          valueForLayoutEffect
        </Button>
        <p>: {valueForLayoutEffect}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <Button onClick={() => setValueForEffect(0)} className='w-[300px]'>
          valueForEffect
        </Button>
        <p>: {valueForEffect}</p>
      </div>
    </div>
  );
};

export default CompareEffects;
