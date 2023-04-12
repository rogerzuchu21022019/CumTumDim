export const formatCodeOrder = id => {
  let code = id
    .substr(id.length - 6)
    .slice(0, 5)
    .toUpperCase();
  let stringCode = `CT${code}`;
  return stringCode;
};

export const convertMoney = money => {
  const moneyNew = Number(money);
  let data = moneyNew * 1000;
  data = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(data);
  return data;
};
