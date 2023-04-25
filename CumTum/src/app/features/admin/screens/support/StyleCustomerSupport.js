import {StyleSheet} from 'react-native';
import {constants} from '../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
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
  iconHeader: {
    width: 30,
    height: 30,
    color: constants.COLOR.WHITE,
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
  //header

  //body
  body: {
    flex: 12,
    backgroundColor: '#252121',
    justifyContent: 'space-around',
    width: '100%',
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  viewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginStart: 20,
  },
  itemSupport: {
    marginBottom: 50,
    // backgroundColor: constants.COLOR.ORANGE,
    marginLeft: 20,
    marginRight: 20,
  },
  viewButtonCreate: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: constants.COLOR.ORANGE,
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  groupBTN: {
    width: '100%',
  },
  btnCreate: {
    // backgroundColor: constants.COLOR.RED,
    fontWeight: '700',
    fontSize: 16,
    color: constants.COLOR.WHITE,
  },
  cartToon: {
    width: '100%',
  },
  imageCartToon: {
    width: 130,
    height: 130,
  },
  imageCartToonTop: {
    width: '100%',
    alignItems: 'flex-end',
  },
  imageCartToonHead: {
    width: 160,
    height: 160,
  },
  btnSignOut: {
    marginEnd: 20,
  },
  //body
});

export default styles;

export default StyleCustomerSupport;