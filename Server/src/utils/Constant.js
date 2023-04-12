const CONSTANTS = {
  SOCKET: {
    CONNECTION: "connection",
    CONNECT: "connect",
    DISCONNECT: "disconnect",
    PUSH_NOTIFY: "push-notify",
    CREATE_ORDER: "create-order",
    UPDATE_ORDER: "update-order",
    FIND_ORDER_BY_USER_ID: "find-order-by-user-id",
    UPDATE_NOTIFICATION:"update-notification"
  },
  RABBIT_MQ: {
    QUEUE_NAME_ORDER: "order",
  },
};

module.exports = CONSTANTS;
