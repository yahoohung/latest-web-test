import React from 'react';
import { useZeroValue } from '@/components/Context/hooks';

const Count = () => {
  const [zeroValue] = useZeroValue();
  return <div>{JSON.stringify(zeroValue)}</div>;
};

export default Count;
