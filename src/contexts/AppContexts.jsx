import React, { useEffect, useReducer, useRef } from "react";
import { AppContext } from "./context";
import { reducer, SET_DATA, SET_USER, SET_USER_LOADING } from "../reducer/reducer";
import LoadingBar from "react-top-loading-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { ToastContainer } from 'react-toastify';

const initialState = {
  gamesData: [],
  user: null,
  passwordError: null,
  emailError: null,
  userLoading: true
};

const AppContexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: SET_USER, payload: currentUser });
      loadingBarRef.current?.complete();
      dispatch({ type: SET_USER_LOADING, payload: false });
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const fetchData = async () => {
      const res = await fetch("/games.json");
      const data = await res.json();
      dispatch({ type: SET_DATA, payload: data });
      loadingBarRef.current?.complete();
    };
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <LoadingBar color="#f11946" height={3} ref={loadingBarRef} />
      {children}
      <ToastContainer/>
    </AppContext.Provider>
  );
};

export default AppContexts;
