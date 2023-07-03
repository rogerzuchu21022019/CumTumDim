import { constants } from "../../shared/constants";

export const setItemPaypal = data => {
  console.log('🚀 ~ file: itemData.js:2 ~ setItemPaypal ~ data:', data);
  const itemNew = data.mainDishCart
    .concat(data.extraDishCart)
    .concat(data.toppingsCart)
    .concat(data.anotherCart)
    .map((item, index) => ({
      name: item.productName,
      description: item.subCategory || '',
      sku: item.productId,
      unit_amount: {
        currency_code: 'USD',
        value: item.price,
      },
      quantity: item.amounts,
    }));

  let itemData = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        items: itemNew,
        amount: {
          currency_code: 'USD',
          value: data.moneyToPaid,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: data.moneyToPaid,
            },
          },
        },
      },
    ],
    application_context: {
      return_url: `${constants.BASE_URL.URL_THANKS_LOCAL}`,
      cancel_url: 'https://example.com/cancel',
    },
  };
  return itemData;
};
