import Links from '@/components/Links'
import {useNetwork} from 'react-use';

const Demo = () => {
  const state = useNetwork();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default function TestPage(props) {
  return (
    <>
      <h1>Test</h1>
      <Links path="test" />

      <Links />

      <Demo />
    </>
  )
}
