import React from 'react';
import { useTestB } from '@/components/Context/hooks';

const DisplayCountMultiB = () => {
  const [testB] = useTestB();
  return (
    <>
      <h2>b1: {testB}</h2>
    </>
  );
};

export default DisplayCountMultiB;
