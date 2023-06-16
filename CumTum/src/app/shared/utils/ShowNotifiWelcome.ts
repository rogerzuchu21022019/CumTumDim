import {showNotifyLocal} from './Notifies';
import notifee from '@notifee/react-native';
export const onShowNotiWelCome = async () => {
  // Request permissions (required for iOS)

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  const title = 'Notification';
  const content = 'Chào mừng bạn đến với dịch vụ của CumTumDim.';
  // console.log("🚀 ~ file: Payment.js:45 ~ onDisplayNotification ~ content:", content)
  const dataMap = {
    title,
    content,
    channelId,
  };
  // Display a notification
  showNotifyLocal(dataMap);
};

export const onDisplayNotification = async (name: string) => {
  // Create a channel (required for Android)
  const title = 'Notification';
  const content = `Cảm ơn bạn ${name} đã đặt hàng. Đơn hàng của bạn đang được chúng tôi xác nhận.....`;
  const dataMap = {
    title,
    content,
  };
  showNotifyLocal(dataMap);
};
