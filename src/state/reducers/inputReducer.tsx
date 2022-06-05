interface Action {
  type: string;
  payload: number;
}

const inputReducer = (state = 0, action: Action): number => {
  switch (action.type) {
    case 'input':
      return state + action.payload;
    default:
      return 0;
  }
};

export default inputReducer;
