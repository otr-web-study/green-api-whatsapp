import { useContext, useState } from 'react';

import { AppContext } from '../context/context';

export const useLoginForm = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const onIdInstanceChange = (evt) => {
    setIdInstance(evt.target.value);
  };

  const onApiTokenInstanceChange = (evt) => {
    setApiTokenInstance(evt.target.value);
  };

  const loginBtnClick = (evt) => {
    evt.preventDefault();

    console.log(idInstance, apiTokenInstance);
  };

  return {
    idInstance,
    apiTokenInstance,
    onIdInstanceChange,
    onApiTokenInstanceChange,
    loginBtnClick,
  };
};
