import Links from '@/components/Links'
import {useNetwork, useIdle} from 'react-use';

const Demo = () => {
  const state = useNetwork();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

const Idle = () => {
  const isIdle = useIdle(3e3);

  return (
    <div>
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  );
};

export default function TestPage(props) {
  return (
    <>
      <h1>Test</h1>
      <Links path="test" />

      <Links />

      <Idle />

      <Demo />
    </>
  )
}
