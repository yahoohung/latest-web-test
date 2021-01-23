import React from 'react';
import Links from '@/components/Links';
import Count from '@/components/Count';
import Button from '@/components/Button';
import ButtonMulti from '@/components/ButtonMulti';
import DisplayCount from '@/components/DisplayCount';
import DisplayCountMulti from '@/components/DisplayCountMulti';
import DisplayCountMultiA from '@/components/DisplayCountMultiA';
import DisplayCountMultiB from '@/components/DisplayCountMultiB';

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
      <hr />
      <DisplayCountMultiA />
      <DisplayCountMultiB />
    </>
  );
}
