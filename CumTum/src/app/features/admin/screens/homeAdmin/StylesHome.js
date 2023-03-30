import {StyleSheet} from 'react-native';
import {constants} from '../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    // backgroundColor: constants.COLOR.PRIMARY,
  },
  /* Header */
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
  },

  imageLogo: {
    width: 40,
    height: 40,
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 20,
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: constants.COLOR.WHITE,
    marginRight: 20,
  },
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
    // marginTop: 10,
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  /* Header */

  //body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.BLACK,
    marginTop: 2,
    // width:'100%'
  },
  groupItem: {},
  viewFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.GREEN,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },

  //body
});
export default styles;
