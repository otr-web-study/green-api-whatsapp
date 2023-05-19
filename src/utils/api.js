const BASE_URL = 'https://api.green-api.com/';

const handleResponse = async (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => Promise.reject({ status: res.status, text }));
};

export const getSettings = async (idInstance, apiTokenInstance) => {
  const resp = await fetch(`${BASE_URL}waInstance${idInstance}/GetSettings/${apiTokenInstance}`);
  return await handleResponse(resp);
};

export const sendMessage = async ({ idInstance, apiTokenInstance }, body) => {
  const resp = await fetch(`${BASE_URL}waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return await handleResponse(resp);
};

const getMessage = async (idInstance, apiTokenInstance) => {
  const resp = await fetch(
    `${BASE_URL}waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
  );
  return await handleResponse(resp);
};

const deleteMessage = async (idInstance, apiTokenInstance, receiptId) => {
  const resp = await fetch(
    `${BASE_URL}waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
    { method: 'DELETE' },
  );
  return await handleResponse(resp);
};

export const getMessages = async ({ idInstance, apiTokenInstance }) => {
  const messages = [];

  let respData = await getMessage(idInstance, apiTokenInstance);
  while (respData) {
    if (respData.body.typeWebhook !== 'incomingMessageReceived') {
      break;
    }

    await deleteMessage(idInstance, apiTokenInstance, respData.receiptId);
    messages.push(respData.body);

    respData = await getMessage(idInstance, apiTokenInstance);
  }

  return messages;
};
