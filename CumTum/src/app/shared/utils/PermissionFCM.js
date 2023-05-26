import messaging from '@react-native-firebase/messaging';
import {LOG} from '../../../../logger.config';
import {formatCodeOrder} from './CreateCodeOrder';
import {showNotifyLocal} from './Notifies';
import {Platform} from 'react-native';
const log = LOG.extend(`PERMISSION_FCM.JS`);
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission({
    provisional: true,
    providesAppNotificationSettings: true,
  });
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    log.error('Authorization status:', authStatus);
    // await messaging().registerDeviceForRemoteMessages()

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
    if (Platform.OS === 'ios')
      await messaging().registerDeviceForRemoteMessages();
    const tokens = await messaging().getToken();
    if (tokens) {
      log.info(
        '🚀 ~ file: PermissionFCM.js:19 ~ getFCMTokens ~ tokens:',
        tokens,
      );
    } else {
      log.info(
        '🚀 ~ file: PermissionFCM.js:19 ~ getFCMTokens ~ tokens:',
        tokens,
      );
    }

    await messaging().onMessage(remoteMessage => {
      const title = remoteMessage.notification.title;
      const body = remoteMessage.notification.body;
      console.log('🚀 ~ file: PermissionFCM.js:52 ~ messaging ~ body:', body);
      const data = remoteMessage.data;
      console.log('🚀 ~ file: PermissionFCM.js:53 ~ messaging ~ data:', data);
      const orderStatus = data.orderStatus;
      const order = data.order;
      const moneyToPaid = data.moneyToPaid;
      onDisplayNotiAccepted(title, order, orderStatus, moneyToPaid);
      // Perform any necessary actions in your app based on the push notification data
    });
  } catch (error) {
    log.info('🚀 ~ file: PermissionFCM.js:20 ~ getFCMTokens ~ error:', error);
  }
};
