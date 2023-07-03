import axios from 'axios';
import {constants} from '../constants';
import {AxiosInstance} from './AxiosInstance';
import {v4 as uuidv4} from 'uuid';
const base64 = require('base-64');
export const getDataPaypal = async () => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${base64.encode(
      `${constants.PAYPAL.CLIENT_ID_PAYPAL}:${constants.PAYPAL.SECRET_PAYPAL}`,
    )}`,
  };
  try {
    const response = await axios.post(
      `${constants.PAYPAL.SANDBOX_PAYPAL}/v1/oauth2/token`,
      {
        grant_type: 'client_credentials',
      },
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createOrderPaypal = async (accessToken, order) => {
  // console.log('🚀 ~ file: Paypal.js:32 ~ createOrderPaypal ~ order:', order);
  try {
    const convertPrice = price => {
      const pricePattern = 23.442;

      let newPrice = price / pricePattern;
      newPrice = newPrice.toFixed(2);
      return newPrice;
    };

    const itemsMainDish = order.mainDishCart.map((item, index) => ({
      name: item.productName,
      productId: item.productId,
      unit_amount: {
        currency_code: 'USD',
        value: convertPrice(item.price),
      },
      quantity: item.amounts,
    }));

    const itemsExtraDish = order.extraDishCart.map((item, index) => ({
      name: item.productName,
      productId: item.productId,
      unit_amount: {
        currency_code: 'USD',
        value: convertPrice(item.price),
      },
      quantity: item.amounts,
    }));

    const itemsTopping = order.toppingsCart.map((item, index) => ({
      name: item.productName,
      productId: item.productId,
      unit_amount: {
        currency_code: 'USD',
        value: convertPrice(item.price),
      },
      quantity: item.amounts,
    }));

    const itemsAnother = order.toppingsCart.map((item, index) => ({
      name: item.productName,
      productId: item.productId,
      unit_amount: {
        currency_code: 'USD',
        value: convertPrice(item.price),
      },
      quantity: item.amounts,
    }));

    const arrayItem = itemsMainDish
      .concat(itemsExtraDish)
      .concat(itemsTopping)
      .concat(itemsAnother);
    // console.log(
    //   '🚀 ~ file: Paypal.js:85 ~ createOrderPaypal ~ arrayItem:',
    //   arrayItem,
    // );

    const tax_total = 0.1;
    const handling = 0.1;
    const insurance = 0.1;
    const shipping = 0;
    const shipping_discount = 0;
    const discount = 0;

    const itemTotal = arrayItem.reduce((acc, item) => {
      return acc + item.unit_amount.value * item.quantity;
    }, 0);
    // console.log(
    //   '🚀 ~ file: Paypal.js:100 ~ itemTotal ~ itemTotal:',
    //   itemTotal.toFixed(),
    // );
    const amount =
      itemTotal +
      tax_total +
      shipping +
      handling +
      insurance -
      shipping_discount -
      discount;

    let itemData = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          items: arrayItem,
          amount: {
            currency_code: 'USD',
            value: amount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: itemTotal.toFixed(2),
              },
              tax_total: {
                currency_code: 'USD',
                value: tax_total,
              },
              shipping: {
                currency_code: 'USD',
                value: shipping,
              },
              handling: {
                currency_code: 'USD',
                value: handling,
              },
              insurance: {
                currency_code: 'USD',
                value: insurance,
              },
              shipping_discount: {
                currency_code: 'USD',
                value: shipping_discount,
              },
              discount: {
                currency_code: 'USD',
                value: discount,
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

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
      `${constants.PAYPAL.SANDBOX_PAYPAL}/v2/checkout/orders`,
      itemData,
      {
        headers: headers,
      },
    );
    // console.log(
    //   '🚀 ~ file: Paypal.js:69 ~ createOrderPaypal ~ response:',
    //   itemData,
    // );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const verifyCaptureOrderPaypal = async (id, accessToken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.post(
      `${constants.PAYPAL.SANDBOX_PAYPAL}/v2/checkout/orders/${id}/capture`,
      null,
      {
        headers: headers,
      },
    );

    return response.data;
  } catch (error) {
    // console.log(
    //   '🚀 ~ file: Paypal.js:119 ~ verifyCaptureOrderPaypal ~ error:',
    //   error,
    // );
  }
};
