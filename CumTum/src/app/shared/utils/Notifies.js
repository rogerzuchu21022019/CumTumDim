import notifee from '@notifee/react-native';

export const showNotifyLocal = async data => {
//   notifee
//     .setBadgeCount(data.countBadge)
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
      channelId: data.channelId,
      smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
      timestamp: Date.now() - 1, // 8 minutes ago
      showTimestamp: true,
    },
  });
};
