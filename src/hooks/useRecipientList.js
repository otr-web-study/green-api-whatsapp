import { useContext } from 'react';

import { AppContext } from '../context/context';

export const useRecipientList = () => {
  const { recipients, selectedRecipient, selectRecipient } = useContext(AppContext);

  const recipientsList = Object.entries(recipients).map(([chatId, fields]) => ({
    chatId,
    title: fields.title,
    active: selectedRecipient === chatId,
  }));

  const onRecipientClick = (chatId) => selectRecipient(chatId);

  return { items: recipientsList, onItemClick: onRecipientClick };
};
