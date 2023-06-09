export const unixtimestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = `0${date.getHours()}`;
  const minutes = `0${date.getMinutes()}`;

  return `${hours.slice(-2)}:${minutes.slice(-2)}`;
};
