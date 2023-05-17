import { getSettings } from '../../utils/api';
import * as actions from '../actionsConstants';
import { setStorageLoginData } from '../../utils/storageHelper';

export const login = (dispatch) => async (idInstance, apiTokenInstance) => {
  dispatch({ type: actions.SET_LOADING, payload: true });

  try {
    await getSettings(idInstance, apiTokenInstance);
  } catch (err) {
    console.log(err);

    const message = 'Could not login. Try again later or change your credentials.';
    dispatch({ type: actions.SET_LOADING, payload: false });
    dispatch({ type: actions.SET_ERROR_MESSAGE, payload: message });
    return;
  }

  const loginData = {
    idInstance,
    apiTokenInstance,
  };
  dispatch({ type: actions.LOGIN, payload: loginData });
  setStorageLoginData(loginData);
  dispatch({ type: actions.SET_LOADING, payload: false });
};
