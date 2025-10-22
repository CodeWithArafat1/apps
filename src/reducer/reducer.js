export const SET_DATA = "SET_DATA";
export const SET_USER = "SET_USER";
export const SET_ERROR_PASSWORD = "SET_ERROR_PASSWORD";
export const SET_ERROR_EMAIL = "SET_ERROR_EMAIL";
export const SET_USER_LOADING = "SET_USER_LOADING";

export const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === SET_DATA) {
    return { ...state, gamesData: payload };
  }
  if (type === SET_USER) {
    return { ...state, user: payload };
  }
  if (type === SET_ERROR_PASSWORD) {
    return { ...state, passwordError: payload };
  }
  if (type === SET_ERROR_EMAIL) {
    return { ...state, emailError: payload };
  }
  if (type === SET_USER_LOADING) {
    return { ...state, userLoading: payload };
  }

  return state;
};
