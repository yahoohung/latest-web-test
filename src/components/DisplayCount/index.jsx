import React from 'react';
import { useAppStore } from '@/components/Context/hooks';

const DisplayCount = () => {
  const [{ count }] = useAppStore();
  return <h1>{count}</h1>;
};

export default DisplayCount;
