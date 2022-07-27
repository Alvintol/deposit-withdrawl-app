
exports.__esModule = true;
;
var accountReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        default:
            return state;
    }
};
exports["default"] = accountReducer;
