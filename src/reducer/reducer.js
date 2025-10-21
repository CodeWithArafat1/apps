export const SET_DATA = "SET_DATA";
export const SET_USER = "SET_USER";

export const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === SET_DATA) {
    return { ...state, gamesData: payload };
  }
  if (type === SET_USER) {
    return { ...state, user: payload };
  }

  return state;
};
