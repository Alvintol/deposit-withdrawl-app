"use strict";
exports.__esModule = true;
exports.changeInput = exports.withdrawMoney = exports.depositMoney = void 0;
var depositMoney = function (amount) {
    return function (dispatch) {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    };
};
exports.depositMoney = depositMoney;
var withdrawMoney = function (amount) {
    return function (dispatch) {
        dispatch({
            type: 'withdraw',
            payload: amount
        });
    };
};
exports.withdrawMoney = withdrawMoney;
var changeInput = function (amount) {
    return function (dispatch) {
        dispatch({
            type: 'input',
            payload: amount
        });
    };
};
exports.changeInput = changeInput;
