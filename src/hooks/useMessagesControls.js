import { useContext } from 'react';

import { AppContext } from '../context/context';

export const useMessagesControls = () => {
  const { getMessages, loginData } = useContext(AppContext);

  const onRefreshClick = () => {
    getMessages(loginData);
  };

  return { onRefreshClick };
};
