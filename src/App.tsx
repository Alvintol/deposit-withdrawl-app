import { useSelector } from 'react-redux';

interface State {
  account: number;
}

const App = () => {
  const account = useSelector((state: State) => state.account);

  return <div className='app'>
    Account currently at: ${account}
  </div>;
};

export default App;
