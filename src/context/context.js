import { createContext, useReducer } from 'react';

import { reducer } from './reducer';

export const AppContext = createContext();

const initialState = {
  isLoggedIn: false,
  loginData: {},
  recipients: [],
  messages: [],
  loading: false,
  error: false,
  errorMessage: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
