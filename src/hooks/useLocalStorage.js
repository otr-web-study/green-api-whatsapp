import { useContext, useEffect } from 'react';

import { setStorageRecipientsData, setStorageMessagesData } from '../utils/storageHelper';
import { AppContext } from '../context/context';

export const useLocalStorage = () => {
  const { recipients, messages } = useContext(AppContext);

  useEffect(() => {
    setStorageRecipientsData(recipients);
  }, [recipients]);

  useEffect(() => {
    setStorageMessagesData(messages);
  }, [messages]);
};
