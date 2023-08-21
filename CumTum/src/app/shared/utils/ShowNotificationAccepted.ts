import {TypeNotification} from '../types';
import {showNotifyLocal} from './Notifies';

export const onDisplayNotiAccepted = async (props: TypeNotification) => {
  const {title, order, orderStatus, moneyToPaid} = props;
  let stringAccepted = `Đơn hàng của bạn có tổng tiền là : ${moneyToPaid}K đã được ${orderStatus}`;
  let stringDeny = `Đơn hàng của bạn có tổng tiền là : ${moneyToPaid}K đã bị ${orderStatus}`;
  const notification = {
    title: title,
    content: orderStatus ? stringAccepted : stringDeny,
    _id: order._id,
    createdAt: order.createdAt,
    isRead: false,
  };
  showNotifyLocal(notification);
};
