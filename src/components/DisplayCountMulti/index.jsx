import React from 'react';
import { useAppStore } from '@/components/Context/hooks';

const DisplayCount = () => {
  const [{ test }] = useAppStore();
  return (
    <>
      <h2>a: {test?.a}</h2>
      <h3>b: {test?.b}</h3>
    </>
  );
};

export default DisplayCount;
