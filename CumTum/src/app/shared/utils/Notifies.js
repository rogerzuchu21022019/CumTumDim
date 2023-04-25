import notifee from '@notifee/react-native';

export const showNotifyLocal = async data => {
  //   notifee
  //     .setBadgeCount(data.countBadge)

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    vibration: true,
    vibrationPattern: [300, 500],
  });
  await notifee.displayNotification({
    title: data.title,
    body: data.content,

    subtitle: 'Messages',

    ios: {
      foregroundPresentationOptions: {
        badge: true,
        sound: true,
        banner: true,
        list: true,
      },

      sound: 'default',

      attachments: [
        //   {
        // iOS resource
        //     url: 'local-image.png',
        //     thumbnailHidden: true,
        //   },
        //   {
        //     // Local file path.
        //     url: '/Path/on/device/to/local/file.mp4',
        //     thumbnailTime: 3, // optional
        //   },
        //   {
        //     // React Native asset.
        //     url: require('./assets/my-image.gif'),
        //   },
        {
          // Remote image
          url: 'https://luv.vn/hinh-anh-gai-xinh/',
        },
      ],
    },

    android: {
      channelId: channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
      timestamp: Date.now() - 1, // 8 minutes ago
      showTimestamp: true,
    },
  });
};
