export const constants = {
  ITEM: {},
  COLOR: {
    PRIMARY: '#252121',
    ORANGE: '#FE724C',
    GREY: '#2F2D2D',
    YELLOW: '#FFB703',
    BLACK: 'black',
    WHITE: '#FFFFFF',
    RED: '#F20000',
    AQUA: 'aqua',
    DARK_BROWN: '#2F2D2D',
    GREEN: 'green',
    BLUE: 'blue',
    LIGHT_BLUE: '#03c2fc',
    PINK_MOMO: '#ec1387',
    LIVE_PAID: '#13ecea',
  },
  PAYPAL: {
    SANDBOX_PAYPAL: 'https://api-m.sandbox.paypal.com',
    CLIENT_ID_PAYPAL:
      'ATjzaFNR4InUFxsBZBtQPnNiu7gvhtVOmovA6IgU6D9wBzPp5FTHTOSr9sqSgd-90h7ALd_4od4QMfvJ',
    SECRET_PAYPAL:
      'EPscZ2cKSvwcybfeIbQksSxlCJVZDGuzAMy0skSzZJIJ2NL4yJUUuKaC6Ve2fi9kHzgnWZOpfSPPU_Oi',
  },
  BASE_URL: {
    MAIN: 'http://192.168.2.7:3000/api',
    // MAIN: 'http://192.168.2.7:3000/api',
    SECOND: 'https://cumtumdim.becofoodstore.click/api',
  },
  SOCKET: {
    URL: 'http://192.168.2.7:3000',
    CONNECTION: 'connection',
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    PUSH_NOTIFY: 'push-notify',
    CREATE_ORDER: 'create-order',
    UPDATE_ORDER: 'update-order',
    FIND_ORDER_BY_USER_ID: 'find-order-by-user-id',
    UPDATE_NOTIFICATION_ADMIN: "update-notification-admin",
    UPDATE_NOTIFICATION_CUSTOMER: "update-notification-customer",

  },
  ROLE: {
    ADMIN: 'admin',
    USER: 'user',
  },
  GOOGLE_CONSOLE: {
    WEB_CLIENT:
      '8392071542-uket243u20vj719uir2iu1ofh4chq7oc.apps.googleusercontent.com',
    IOS_CLIENT:
      '8392071542-6jau34qpcu594et1vbt2uukakso783au.apps.googleusercontent.com',
    ANDROID_CLIENT:
      '8392071542-rhodj3pj05jsqjer7661m8d1pprerrio.apps.googleusercontent.com',
  },
  SCOPES: {
    PROFILE: 'profile',
    EMAIL: 'email',
  },
  FETCH: {
    LOGIN: 'fetchLogin',
    USER_BY_ID: 'fetchUserById',
    UPLOAD_IMAGE: 'fetchUploadImage',
    SIGN_OUT: 'fetchSignOut',
    FIND_CATEGORIES: 'fetchCategories',
    ADD_DISH: 'fetchAddDish',
    FIND_DISHES: 'fetchDishes',
    CREATE_ORDER: 'fetchCreateOrder',
    FIND_ORDERS: 'fetchOrders',
    FIND_RABBIT: 'fetchRabbit',
    PUSH_NOTIFICATION: 'fetchNotification',
    FIND_NOTIFICATIONS: 'fetchNotifications',
    UPDATE_ORDER: 'fetchUpdateOrder',
    ACCESS_TOKEN_PAYPAL: 'fetchAccessTokenPaypal',
    CREATE_ORDER_PAYPAL: 'fetchCreateOrderPaypal',
    UPDATE_NOTIFICATION: 'fetchUpdateNotification',
  },
  SLICE: {
    ADMIN: 'admin',
    AUTH: 'auth',
    PRODUCT: 'product',
    CART: 'cart',
  },
  DISPATCH: {
    ADD_WISH_CART: 'addWishCart',
  },

  RABBIT_MQ: {
    QUEUE_NAME_ORDER: 'order',
  },
};
