import {constants} from '../../../shared/constants';

const {StyleSheet, YellowBox} = require('react-native');

const styleSplashScreen = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: constants.COLOR.PRIMARY,
  },

  /*Header*/
  header: {
    flex: 1,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: constants.COLOR.AQUA,
  },
  imageBody: {
    height: 380,
    // backgroundColor: constants.COLOR.RED,
    width: 380,
  },

  /*Header*/
  footers: {
    flex: 1,
  },
  /*Body*/
});
export default styleSplashScreen;
