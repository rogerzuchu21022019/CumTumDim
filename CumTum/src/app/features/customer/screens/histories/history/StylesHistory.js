import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.WHITE,
  },

  /* Header */

  header: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
  },

  divideLine: {
    height: 1,
    backgroundColor: constants.COLOR.WHITE,
  },

  /* body */

  body: {
    flex: 14,
    backgroundColor: constants.COLOR.PRIMARY,
  },
  viewFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.GREEN,
    width: '100%',
    height: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});
export default styles;
