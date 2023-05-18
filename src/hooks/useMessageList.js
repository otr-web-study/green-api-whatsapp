import { useContext } from 'react';

import { AppContext } from '../context/context';

export const useMessageList = () => {
  const { selectedRecipient, messages } = useContext(AppContext);

  const messageList = messages[selectedRecipient] ?? [];

  return { messageList };
};
