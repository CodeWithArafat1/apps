import React, { useEffect, useReducer, useRef } from "react";
import { AppContext } from "./context";
import { reducer, SET_DATA, SET_USER } from "../reducer/reducer";
import LoadingBar from "react-top-loading-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const initialState = {
  gamesData: [],
  user: null,
};

const AppContexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: SET_USER, payload: currentUser });
      loadingBarRef.current?.complete();
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
    </AppContext.Provider>
  );
};

export default AppContexts;
