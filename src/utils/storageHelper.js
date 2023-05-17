const LOGIN_DATA = 'LOGIN_DATA';
const MESSAGES_DATA = 'MESSAGES_DATA';
const RECIPIENTS_DATA = 'RECIPIENTS_DATA';

const getLocalData = (key) => {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return {};
  }

  return JSON.parse(localData);
};

export const getStorageLoginData = () => getLocalData(LOGIN_DATA);

export const setStorageLoginData = (loginData) => {
  localStorage.setItem(LOGIN_DATA, JSON.stringify(loginData));
};

export const getStorageMessagesData = () => getLocalData(MESSAGES_DATA);

export const setStorageMessagesData = (messagesData) => {
  localStorage.setItem(MESSAGES_DATA, JSON.stringify(messagesData));
};

export const getStorageRecipientsData = () => getLocalData(RECIPIENTS_DATA);

export const setStorageRecipientsData = (recipientData) => {
  localStorage.setItem(RECIPIENTS_DATA, JSON.stringify(recipientData));
};
