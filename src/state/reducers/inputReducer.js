"use strict";
exports.__esModule = true;
var inputReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case 'input':
            return state = action.payload;
        default:
            return state;
    }
};
exports["default"] = inputReducer;
