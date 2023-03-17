module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/'],

    dependencies: {
        'react-native-google-signin': {
          platforms: {
            android: null, // disable Android platform, other platforms will still autolink if provided
          },
        },
    
      },
};