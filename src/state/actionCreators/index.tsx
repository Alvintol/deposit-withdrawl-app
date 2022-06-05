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
