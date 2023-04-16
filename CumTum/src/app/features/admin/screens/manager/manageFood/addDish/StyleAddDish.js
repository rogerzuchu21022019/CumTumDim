import {constants} from '../../../../../../shared/constants';

const {StyleSheet} = require('react-native');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /* Header */
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
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
    // marginLeft: ,
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
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageReturn: {
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 5,
    marginRight: 5,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  /* Header */

  body: {
    flex: 12,
    backgroundColor: constants.COLOR.PRIMARY,
  },
  viewDropdown: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.YELLOW,
  },
  viewButtonCreate: {
    backgroundColor: constants.COLOR.ORANGE,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 150,
    height: 50,
  },
  btnCreate: {
    // backgroundColor: constants.COLOR.RED,
    fontWeight: '700',
    fontSize: 20,
    color: constants.COLOR.WHITE,
  },
});
export default styles;
