import { PermissionsAndroid } from 'react-native';

export const androidCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
    
    console.log('granted response:', granted);
    
    if (
      granted['android.permission.CAMERA'] !== 'granted' ||
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
      granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
    ) {
      showError("Don't have required permission. Please allow permissions.");
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
