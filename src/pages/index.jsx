import Links from '@/components/Links'
import { useAppStore } from '@/components/Context/hooks'

export default function IndexPage(props) {
  const [state, actions] = useAppStore();
  return (
    <>
      <h1>Home</h1>
      <Links path="test"/>
      <Links /> 
      {state.count}     
    </>
  );
}
