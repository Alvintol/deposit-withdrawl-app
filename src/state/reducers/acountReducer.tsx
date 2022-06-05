interface Action {
  type: string;
  payload: number;
}

const reducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
