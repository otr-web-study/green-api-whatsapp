const BASE_URL = 'https://api.green-api.com/';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => Promise.reject({ status: res.status, text }));
};

export const getSettings = (idInstance, apiTokenInstance) =>
  fetch(`${BASE_URL}waInstance${idInstance}/GetSettings/${apiTokenInstance}`).then((res) =>
    handleResponse(res),
  );
