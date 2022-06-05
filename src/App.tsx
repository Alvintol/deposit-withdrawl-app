import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeInput } from './state/actionCreators';
import { actionCreators } from './state/index';

interface State {
  account: number;
  input: number;
}

const App = () => {
  const { account, input } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, changeInput } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className='app'>
      Amount in account:
      <h1>{account}</h1>
      <input
        type='number'
        value={input}
        onChange={(e) => changeInput(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          withdrawMoney(input);
          changeInput(0);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          depositMoney(input);
          changeInput(0);
        }}
      >
        Deposit
      </button>
    </div>
  );
};

export default App;
