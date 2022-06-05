import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

interface State {
  account: number;
  input?: number
}

const App = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );


  return (
  <div className='app'>
    Amount in account: 
    <h1>{state.account}</h1>
    <input type="number" value={state?.input}/>
    <button onClick={() => withdrawMoney}>Withdraw</button>
    <button onClick={() => depositMoney}>Deposit</button>
    </div>
    );
};

export default App;
