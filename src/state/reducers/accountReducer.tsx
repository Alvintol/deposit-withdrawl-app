interface Action {
  type: string;
  payload: number;
};

const accountReducer = (state: number = 0, action: Action) : number => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
