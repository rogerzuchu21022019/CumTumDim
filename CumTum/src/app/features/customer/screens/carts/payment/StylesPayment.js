import { constants } from '../../../../../shared/constants';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
  },

  /* Header */
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,

  },
  leftHeader: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
  },
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
    // marginTop: 10,
  },
  textTitle: {
    color: constants.COLOR.WHITE,
    fontWeight:'900',
    fontSize:16,
    lineHeight:22
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
    backgroundColor: constants.COLOR.GREY,
    padding: 20,
  },
  viewText: {
  paddingTop:40
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: constants.COLOR.WHITE,
  },
  text1: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: constants.COLOR.WHITE,
    paddingTop: 20
  },
  viewVnPay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.ORANGE,
    width: 366,
    height: 73,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewVisa: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.ORANGE,
    width: 366,
    height: 73,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewZaloPay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.ORANGE,
    width: 366,
    height: 73,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewImage1: {
    flex: 1
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: constants.COLOR.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10


  },
  checkboxChecked: {
    backgroundColor: constants.COLOR.ORANGE,


  },
  checkmarkImage: {
    height: 54,
    width: 54
  },
  viewTextPay: {
    marginLeft: 50,
    flex: 1
  },
  textVNPAY: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: constants.COLOR.WHITE,
  },
  viewTextVisa: {
    marginLeft: 50,
    flex: 1
  },
  textVisa: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: constants.COLOR.WHITE
  },
  viewTextZaloPay: {
    marginLeft: 50,
    flex: 1
  },
  textZaloPay: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: constants.COLOR.WHITE
  },

  // footer
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOR.DARK_BROWN,
    // backgroundColor: constants.COLOR.YELLOW,
  },
  viewButtonNext: {
    backgroundColor: constants.COLOR.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 52,
    width: 342,
   
  },
  btnNext: {
    // backgroundColor: constants.COLOR.RED,
    fontWeight: '700',
    fontSize: 20,
    color: constants.COLOR.WHITE,
  },
  viewFooter:{
    flex: 2,
  }
});
export default styles;
