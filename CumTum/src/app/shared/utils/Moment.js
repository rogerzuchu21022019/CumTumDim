import moment from 'moment';

export const formatTime = timeCreatedAt => {
  const timeStamp = new Date(timeCreatedAt).getTime();
  return moment(timeStamp).format('DD-MM-YYYY');
};
