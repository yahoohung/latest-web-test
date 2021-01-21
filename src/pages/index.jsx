import React from 'react';
import Links from '@/components/Links';
import Count from '@/components/Count';
import Button from '@/components/Button';
import ButtonMulti from '@/components/ButtonMulti';
import DisplayCount from '@/components/DisplayCount';
import DisplayCountMulti from '@/components/DisplayCountMulti';

export default function IndexPage() {
  return (
    <>
      <h1>Home</h1>
      <Links path="test" />
      <Links />
      <DisplayCount />
      <Count />
      <Button />
      <hr />
      <ButtonMulti />
      <DisplayCountMulti />
    </>
  );
}
