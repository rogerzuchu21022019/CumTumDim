import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../shared/constants';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  trashImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    borderRadius: 20,
  },

  // body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },

  itemEat: {
    backgroundColor: constants.COLOR.GREY,
    height: 250,
    width: 350,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  itemNumber: {
    flex: 1,
    justifyContent: 'center',
  },

  numberItem: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  itemQuantity: {
    flex: 1,
  },
  imageEdit: {
    justifyContent: 'center',
    backgroundColor: constants.COLOR.ORANGE,
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
  },

  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
  },
  viewName: {
    flex: 3,
  },
  // nameTitle: {
  //   color: constants.COLOR.WHITE,
  //   fontSize: 20,
  //   paddingBottom: 15,
  // },

  // itemImage: {
  //   height: 25,
  //   width: 25,
  // },
});
export default Styles;
