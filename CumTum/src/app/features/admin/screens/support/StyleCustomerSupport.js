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
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSupport: {
    marginBottom: 40,
    backgroundColor: '#252121',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image:{
    marginEnd:10,
  },
  itemSupport1: {
    gap: 55,
    flexDirection: 'column',
  },
  itemSupport2: {
    gap: 80,
    flexDirection: 'column',
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  viewButtonCreate: {
    backgroundColor: constants.COLOR.YELLOW,
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
  //body
});

export default styles;
