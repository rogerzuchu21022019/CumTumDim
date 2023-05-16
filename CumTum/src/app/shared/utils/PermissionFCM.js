import messaging from '@react-native-firebase/messaging';

import {LOG} from '../../../../logger.config';
import {formatCodeOrder} from './CreateCodeOrder';
import {showNotifyLocal} from './Notifies';
const log = LOG.extend(`PERMISSION_FCM.JS`);
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    log.error('Authorization status:', authStatus);
    getFCMTokens();
  }
};

const onDisplayNotiAccepted = async (
  title,
  order,
  orderStatus,
  moneyToPaid,
) => {
  log.info(
    '🚀 ~ file: PermissionFCM.js:20 ~ onDisplayNotiAccepted ~ order:',
    order,
  );
  let stringAccepted = `Đơn hàng của bạn có tổng tiền là : ${moneyToPaid}K đã được ${orderStatus}`;
  let stringDeny = `Đơn hàng của bạn có tổng tiền là : ${moneyToPaid}K đã bị ${orderStatus}`;
  const notification = {
    title: title,
    content: orderStatus ? stringAccepted : stringDeny,
    _id: order._id,
    createdAt: order.createdAt,
    isRead: false,
  };

  const data = {
    userId: order.userId,
    notification: notification,
  };

  showNotifyLocal(notification);
};

export const getFCMTokens = async () => {
  try {
    messaging().onMessage(remoteMessage => {
      const title = remoteMessage.notification.title;
      const body = remoteMessage.notification.body;
      console.log("🚀 ~ file: PermissionFCM.js:52 ~ messaging ~ body:", body)
      const data = remoteMessage.data;
      console.log("🚀 ~ file: PermissionFCM.js:53 ~ messaging ~ data:", data)
      const orderStatus = data.orderStatus;
      const order = data.order;
      const moneyToPaid = data.moneyToPaid;
      onDisplayNotiAccepted(title, order, orderStatus, moneyToPaid);
      // Perform any necessary actions in your app based on the push notification data
    });

    const tokens = await messaging().getToken();
    // log.info('🚀 ~ file: PermissionFCM.js:19 ~ getFCMTokens ~ tokens:', tokens);
  } catch (error) {
    log.info('🚀 ~ file: PermissionFCM.js:20 ~ getFCMTokens ~ error:', error);
  }
};
