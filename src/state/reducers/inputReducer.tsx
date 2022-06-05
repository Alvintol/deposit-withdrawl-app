interface Action {
  type: string;
  payload: number;
}

const inputReducer = (state: number = 0, action: Action): number => {
  switch (action.type) {
    case 'input':
      return state = action.payload;
    default:
      return state;
  }
};

export default inputReducer;
