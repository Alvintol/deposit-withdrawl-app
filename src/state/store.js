
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var index_1 = require("./reducers/index");
var store = (0, toolkit_1.configureStore)({ reducer: index_1["default"] });
exports["default"] = store;
