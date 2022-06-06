"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var accountReducer_1 = require("./accountReducer");
var inputReducer_1 = require("./inputReducer");
var reducers = (0, redux_1.combineReducers)({
    account: accountReducer_1["default"],
    input: inputReducer_1["default"]
});
exports["default"] = reducers;
