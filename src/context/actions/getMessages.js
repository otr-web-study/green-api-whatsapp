import { getMessages as getMessagesApi } from '../../utils/api';
import * as actions from '../actionsConstants';

export const getMessages = (dispatch, ctx) => async (loginData) => {
  const incomeMessages = await getMessagesApi(loginData);
  const { recipients } = ctx;

  const { messagesBySender, incomeRecipients } = incomeMessages.reduce(
    ({ messagesBySender, incomeRecipients }, { idMessage, senderData, messageData }) => {
      const chatId = senderData.chatId;
      const currentMessages = {
        ...messagesBySender,
        [chatId]: [
          ...(messagesBySender[chatId] ?? []),
          {
            id: idMessage,
            text: messageData.textMessageData.textMessage,
            income: true,
            dateAt: Date.now(),
          },
        ],
      };

      const currentRecipients = {
        ...incomeRecipients,
        [chatId]: { title: senderData.chatName },
      };

      return { messagesBySender: currentMessages, incomeRecipients: currentRecipients };
    },
    { messagesBySender: {}, incomeRecipients: {} },
  );

  Object.entries(incomeRecipients).forEach(([chatId, recipientData]) => {
    if (!(chatId in recipients)) {
      dispatch({ type: actions.ADD_RECIPIENT, payload: { chatId, ...recipientData } });
    }
  });

  dispatch({ type: actions.ADD_MESSAGES, payload: messagesBySender });
};
