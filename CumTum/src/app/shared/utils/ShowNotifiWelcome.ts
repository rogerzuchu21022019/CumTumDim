/* eslint-disable @typescript-eslint/no-unused-vars */
import {TypeResponseNotificationFirebase} from '../types';
import {showNotifyLocal} from './Notifies';
import notifee from '@notifee/react-native';
export const onShowNotiWelCome = async (title: string, body: string) => {
  // Request permissions (required for iOS)

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  const dataMap = {
    title,
    content: body,
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

export const onShowData = async (data: TypeResponseNotificationFirebase) => {
  // Create a channel (required for Android)
  const title = data.title;
  const dataFromBE = data.data;
  console.log(
    '🚀 ~ file: ShowNotifiWelcome.ts:37 ~ onShowData ~ dataFromBE:',
    dataFromBE,
  );
  const content = data.body;
  const dataMap = {
    title,
    content,
  };
  showNotifyLocal(dataMap);
};
