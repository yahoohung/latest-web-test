import React from 'react';
import { useCountValue } from '@/components/Context/hooks';

const DisplayCount = () => {
  const [count] = useCountValue();
  return <h1>{count}</h1>;
};

export default DisplayCount;
