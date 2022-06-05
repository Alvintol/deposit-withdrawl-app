type stateType = number | null;

interface Action {
  type: string;
  payload: stateType;
}


const inputReducer = (state = '', action: Action): stateType => {
  switch (action.type) {
    case 'input': return action.payload
    default:
      return null;
  }
};

export default inputReducer;
