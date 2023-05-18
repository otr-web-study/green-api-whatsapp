import { sendMessage as sendMessageApi } from '../../utils/api';
import * as actions from '../actionsConstants';
import { setStorageMessagesData } from '../../utils/storageHelper';

export const sendMessage = (dispatch, ctx) => async (loginData, chatId, message, cb) => {
  let resp;
  try {
    resp = await sendMessageApi(loginData, { message, chatId });
  } catch (err) {
    console.log(err);
    const errMessage = 'Could not login. Try again later or change your credentials.';
    dispatch({ type: actions.SET_ERROR_MESSAGE, payload: errMessage });
    return;
  }

  console.log(resp);
  const storeMessage = {
    id: resp.idMessage,
    text: message,
    income: false,
    dateAt: Date.now(),
  };
  dispatch({ type: actions.ADD_MESAGE, payload: { chatId, message: storeMessage } });

  setStorageMessagesData({
    ...ctx.messages,
    [chatId]: [...(ctx.messages[chatId] ?? []), storeMessage],
  });

  if (cb) {
    cb();
  }
};
