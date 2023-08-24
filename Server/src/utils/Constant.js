const CONSTANTS = {
  SOCKET: {
    CONNECTION: "connection",
    CONNECT: "connect",
    DISCONNECT: "disconnect",
    PUSH_NOTIFY: "push-notify",
    CREATE_ORDER: "create-order",
    UPDATE_ORDER: "update-order",
    FIND_ORDER_BY_USER_ID: "find-order-by-user-id",
    PUSH_NOTIFICATION_ADMIN: "push-notification-admin",
    UPDATE_NOTIFICATION_ADMIN: "update-notification-admin",
    PUSH_NOTIFICATION_CUSTOMER: "push-notification-customer",
    UPDATE_NOTIFICATION_CUSTOMER: "update-notification-customer",
    CONNECT_RABBIT_ADMIN: "connectRabbitAdmin",
    CONNECT_RABBIT_CUSTOMER: "connectRabbitCustomer",
  },
  RABBIT_MQ: {
    QUEUE_NAME_ORDER: "order",
    
  },
};

module.exports = CONSTANTS;
