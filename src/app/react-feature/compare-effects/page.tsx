'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';

const CompareEffects = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    // const timer = setTimeout(() => {
    //   setValue(prev => prev + 1);
    // }, 1000);
    // return () => clearTimeout(timer);
  }, [value]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    if (value % 2 === 0) {
      document.body.style.backgroundColor = 'lightblue';
    } else {
      document.body.style.backgroundColor = 'lightcoral';
    }
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default CompareEffects;
