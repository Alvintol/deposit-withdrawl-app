
exports.__esModule = true;
var client_1 = require("react-dom/client");
var App = require("./App");
var store_1 = require("./state/store");
var react_redux_1 = require("react-redux");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(
    <react_redux_1.Provider store={store_1["default"]}>
      <App />;
    </react_redux_1.Provider>);
