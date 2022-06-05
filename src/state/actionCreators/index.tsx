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

export const changeInput = (amount: number | null) => {
  return (
    dispatch: (arg0: { type: string; payload: number | null }) => void
  ) => {
    dispatch({
      type: 'input',
      payload: amount,
    });
  };
};
