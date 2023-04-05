import moment from 'moment';

export const formatTime = timeCreatedAt => {
  const timeStamp = new Date(timeCreatedAt).getTime();
  const day = new Date(timeStamp).getDate();
  const month = new Date(timeStamp).getMonth() + 1;
  const year = new Date(timeStamp).getFullYear();
  if (day < 10 && month < 10) {
    return `0${day}-0${month}-${year}`;
  }
};
