
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var index_1 = require("./state/index");
require("./styling/sass/app.scss");
var App = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) { return state; }), account = _a.account, input = _a.input;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, redux_1.bindActionCreators)(index_1.actionCreators, dispatch), depositMoney = _b.depositMoney, withdrawMoney = _b.withdrawMoney, changeInput = _b.changeInput;
    var color = account > 0 ? { color: 'green' } : { color: 'red' };
    return (<div id='app'>
      <h2>Account Balance</h2>
      <h1>
        $ <span style={color}>{account.toLocaleString('en-US')}</span>
      </h1>
      <div id='amount'>
        <div id='currency'>$</div>
        <input type='number' value={input} onChange={function (e) { return changeInput(Number(e.target.value)); }}/>
      </div>
      <div id='button-container'>
        <button onClick={function () {
            withdrawMoney(input);
            changeInput(0);
        }}>
          Withdraw
        </button>
        <button onClick={function () {
            depositMoney(input);
            changeInput(0);
        }}>
          Deposit
        </button>
      </div>
    </div>);
};
exports["default"] = App;
