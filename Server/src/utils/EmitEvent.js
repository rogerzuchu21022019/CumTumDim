const CONSTANTS = require("./Constant");

const EmitEvent = (socket) => {
  try {
    socket.emit(CONSTANTS.SOCKET.UPDATE_ORDER, order);
    socket.emit(CONSTANTS.SOCKET.FIND_ORDER_BY_USER_ID, order.userId);
    socket.emit(CONSTANTS.SOCKET.UPDATE_NOTIFICATION_CUSTOMER, order);
  } catch (error) {}
};

module.export = EmitEvent;
