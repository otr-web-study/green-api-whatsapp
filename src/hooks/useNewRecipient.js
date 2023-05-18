import { useContext, useState } from 'react';

import { AppContext } from '../context/context';

export const useNewRecipient = () => {
  const { recipients, addRecipient, setErrorMessage } = useContext(AppContext);
  const [recipient, setRecipient] = useState('');
  const [title, setTitle] = useState('');

  const onRecipientChange = (evt) => {
    setRecipient(evt.target.value);
  };

  const onTitleChane = (evt) => {
    setTitle(evt.target.value);
  };

  const addClick = (evt) => {
    evt.preventDefault();
    if (!new RegExp(/^\d+$/).test(recipient)) {
      setErrorMessage('Field "Recipient" required and must contain only numbers.');
      return;
    }

    const chatId = `${recipient}@c.us`;

    if (recipients[chatId]) {
      setErrorMessage('You have already added this recipient to the list.');
      return;
    }

    addRecipient({ chatId, title: title ? title : chatId });
  };

  return {
    recipient,
    title,
    onRecipientChange,
    onTitleChane,
    addClick,
  };
};
