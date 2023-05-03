import messaging from '@react-native-firebase/messaging';

import {LOG} from '../../../../logger.config';
const log = LOG.extend(`PERMISSION_FCM.JS`);
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled) {
  //   log.error('Authorization status:', authStatus);
  //   getFCMTokens();
  // }
};

export const getFCMTokens = async () => {
  try {
    messaging().onMessage(remoteMessage => {
      log.info(
        'Received push notification: ',
        remoteMessage.notification.title,
      );
      log.info(
        'Received push notification: ',
        remoteMessage.notification.body,
      );

      // Perform any necessary actions in your app based on the push notification data
    });

    const tokens = await messaging().getToken();
    log.info(
      '🚀 ~ file: PermissionFCM.js:19 ~ getFCMTokens ~ tokens:',
      tokens,
    );
  } catch (error) {
    log.info(
      '🚀 ~ file: PermissionFCM.js:20 ~ getFCMTokens ~ error:',
      error,
    );
  }
};
