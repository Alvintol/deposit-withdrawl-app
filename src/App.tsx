import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import './styling/sass/app.scss';

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

  const color = account > 0 ? { color: 'green' } : { color: 'red' };

  return (
    <div id='app'>
      <h2>Account Balance</h2>
      <h1>
        $ <span style={color}>{account.toLocaleString('en-US')}</span>
      </h1>
      <div id='amount'>
        <div id='currency'>$</div>
        <input
          type='number'
          value={input}
          onChange={(e) => changeInput(Number(e.target.value))}
        />
      </div>
      <div id='button-container'>
        <button
          onClick={(): void => {
            withdrawMoney(input);
            changeInput(0);
          }}
        >
          Withdraw
        </button>
        <button
          onClick={(): void => {
            depositMoney(input);
            changeInput(0);
          }}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export default App;
