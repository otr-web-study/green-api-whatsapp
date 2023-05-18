import { createContext, useReducer } from 'react';

import { reducer } from './reducer';
import * as actions from './actionsConstants';
import {
  getStorageLoginData,
  setStorageLoginData,
  getStorageMessagesData,
  getStorageRecipientsData,
  setStorageRecipientsData,
} from '../utils/storageHelper';
import { login, sendMessage, getMessages } from './actions';

export const NEW_RECIPIENT_PANEL = 'NEW_RECIPIENT';
export const SETTINGS_PANEL = 'SETTINGS';

export const AppContext = createContext();

const loginData = getStorageLoginData();
const isLoggedIn = Object.keys(loginData).length > 0;

const initialState = {
  isLoggedIn,
  loginData,
  messages: getStorageMessagesData(),
  recipients: getStorageRecipientsData(),
  loading: false,
  errorMessage: '',
  activePanel: '',
  selectedRecipient: null,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setErrorMessage = (message) =>
    dispatch({ type: actions.SET_ERROR_MESSAGE, payload: message });

  value.login = login(dispatch);

  value.logout = () => {
    dispatch({ type: actions.LOGOUT });
    setStorageLoginData({});
  };

  value.setActivePanel = (panel) => dispatch({ type: actions.SET_ACTIVE_PANEL, payload: panel });

  value.addRecipient = (recipientData) => {
    dispatch({ type: actions.ADD_RECIPIENT, payload: recipientData });
    setStorageRecipientsData({
      ...value.recipients,
      [recipientData.chatId]: { title: recipientData.title },
    });
  };

  value.selectRecipient = (recipient) =>
    dispatch({ type: actions.SELECT_RECIPIENT, payload: recipient });

  value.sendMessage = sendMessage(dispatch, value);

  value.getMessages = getMessages(dispatch, value);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
