import React from 'react';
import Links from '@/components/Links';
import Count from '@/components/Count';
import Button from '@/components/Button';

export default function IndexPage() {
  return (
    <>
      <h1>Home</h1>
      <Links path="test" />
      <Links />
      <Count />
      <Button />
    </>
  );
}
