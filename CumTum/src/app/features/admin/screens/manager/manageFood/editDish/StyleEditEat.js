import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../shared/constants';
const StyleEditEat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  // header
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
  // body
  body: {
    flex: 12,
    backgroundColor: '#252121',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  boxFlashList: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },

  nameTitle: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 15,
  },
  itemAddress: {
    marginBottom: 10,
  },
  textAddress: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  Line: {
    height: 1,
    backgroundColor: 'white',
  },
  finalBtn: {
    justifyContent: 'center,',
  },
  itemBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB703',
    height: 40,
    width: 150,
    borderRadius: 15,
  },
  itemImage: {
    height: 25,
    width: 25,
  },

  boxMainDish: {
    backgroundColor: constants.COLOR.GREY,
    paddingVertical: 20,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  textMainDish: {
    color: constants.COLOR.WHITE,
  },
});
export default StyleEditEat;
