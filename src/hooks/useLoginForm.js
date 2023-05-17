import { useContext, useState } from 'react';

import { AppContext } from '../context/context';

export const useLoginForm = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const { login, setErrorMessage } = useContext(AppContext);

  const onIdInstanceChange = (evt) => {
    setIdInstance(evt.target.value);
  };

  const onApiTokenInstanceChange = (evt) => {
    setApiTokenInstance(evt.target.value);
  };

  const loginBtnClick = (evt) => {
    evt.preventDefault();

    if (!idInstance || !apiTokenInstance) {
      setErrorMessage('All fields are required to be filled in.');
      return;
    }

    login(idInstance, apiTokenInstance);
  };

  return {
    idInstance,
    apiTokenInstance,
    onIdInstanceChange,
    onApiTokenInstanceChange,
    loginBtnClick,
  };
};
