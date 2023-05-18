import { useContext, useState } from 'react';

import { AppContext } from '../context/context';

export const useSendMessage = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loginData, selectedRecipient } = useContext(AppContext);

  const onMessageChange = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(loginData, selectedRecipient, message, () => {
      setMessage('');
    });
  };

  return { message, onMessageChange, handleSendMessage };
};
