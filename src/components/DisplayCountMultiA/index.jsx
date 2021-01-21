import React from 'react';
import { useTestA } from '@/components/Context/hooks';

const DisplayCountMultiA = () => {
  const [testA] = useTestA();
  return (
    <>
      <h2>a1: {testA}</h2>
    </>
  );
};

export default DisplayCountMultiA;
