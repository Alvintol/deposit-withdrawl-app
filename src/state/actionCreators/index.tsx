export const depositMoney = (amount: number) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};

export const changeInput = (amount: number) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: 'input',
      payload: amount,
    });
  };
};

export const clearInput = () => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: 'empty',
      payload: 0,
    });
  };
};
