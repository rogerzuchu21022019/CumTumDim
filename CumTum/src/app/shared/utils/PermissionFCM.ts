import messaging from '@react-native-firebase/messaging';
import {LOG} from '../../../../logger.config';
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

export const getFCMTokens = async () => {
  try {
    // if (Platform.OS === 'ios')
    //   await messaging().registerDeviceForRemoteMessages();
    const tokens = await messaging().getToken();
    if (tokens) {
      log.info(
        '🚀 ~ file: PermissionFCM.js:19 ~ getFCMTokens ~ tokens:',
        tokens,
      );
    }
  } catch (error) {
    log.info('🚀 ~ file: PermissionFCM.js:20 ~ getFCMTokens ~ error:', error);
  }
};
