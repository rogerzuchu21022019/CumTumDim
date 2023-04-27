import { StyleSheet } from 'react-native';
import { constants } from '../../../../../shared/constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // /*Header*/
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
    marginBottom: 2,
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
    fontSize: 18,
    fontWeight: '400',
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

  // /*Header*/

  // /*Body*/
  body: {
    flex: 12,
    width: '100%',
    height: '100%',
    backgroundColor: constants.COLOR.BLACK,
    marginBottom: 2,
    overflow: 'hidden',
  },

  divideLine: {
    height: 2,
    width: '100%',
    backgroundColor: constants.COLOR.WHITE,
    marginTop: 18,
    marginBottom: 20,
  },
   divideLine1: {
    height: 2,
    width: '90%',
    backgroundColor: constants.COLOR.WHITE,
    marginTop: 20,
    marginBottom: 20,
  },

  viewScrollList: {
    flex: 1,
    width: '100%',
    minHeight: 500,
    alignItems: 'center',

    // backgroundColor: constants.COLOR.ORANGE,
  },
  // groupText: {
  //   backgroundColor: constants.COLOR.WHITE,
  // },
  scrollView: {
    flexGrow: 1,
  },
  viewFlashList: {
    flex: 10,
    width: '100%',
    minHeight: 300,
    // backgroundColor: constants.COLOR.WHITE,
  },

  viewMainDishes: {
    flex: 1,
    width: '100%',
    minHeight: 200,
    // backgroundColor: constants.COLOR.AQUA,
  },

  viewExtraDishes: {
    flex: 1,
    width: '100%',
    minHeight: 200,
    // backgroundColor: constants.COLOR.AQUA,
  },

  viewToppings: {
    flex: 1,
    width: '100%',
    minHeight: 200,

    // backgroundColor: constants.COLOR.AQUA,
  },
  viewAnother: {
    flex: 1,
    width: '100%',
    minHeight: 200,
    // backgroundColor: constants.COLOR.AQUA,
  },
  viewTextHeader: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  viewTextTotalMoney: {
    // backgroundColor: constants.COLOR.AQUA,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginEnd: 20,
  },

  viewTotal: {
    minHeight: 200,
    // backgroundColor: constants.COLOR.YELLOW,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    // flex: 1,
  },
  viewBoxShowInfoBill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: constants.COLOR.WHITE,
  },
  viewBoxShowSubInfoBill: {
    paddingLeft: 20,
  },
  groupText:{
    gap: 2,
  },
  viewText:{
    marginRight: 35,
  },
  textlogo:{
    color: constants.COLOR.WHITE,
    fontSize: 16,
    lineHeight: 30,
    textAlign:'center',
  },
  textbill:{
    color: constants.COLOR.WHITE,
    fontSize: 18,
    lineHeight: 30,
    textAlign:'center',
    fontWeight: '700',
  },
  textpayment:{
    color: constants.COLOR.WHITE,
    fontSize: 16,
    lineHeight: 30,
  },
  textInfo: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    lineHeight: 30,
    fontWeight:'700',
  },
  head:{
    backgroundColor: constants.COLOR.WHITE,
  },
  text:{
    backgroundColor: constants.COLOR.WHITE,
  },
  textName:{
    color: constants.COLOR.WHITE,
    fontWeight:'700',
    fontSize: 16,
    lineHeight: 25,
    textAlign:'center',
    marginTop: 15,
    marginLeft: 0,
  },
  updateSubText: {
    fontSize: 16,
  },
  updateMoney: {
    fontSize: 14,
    color: constants.COLOR.WHITE,
  },
  updateTextInfo: {
    fontSize: 24,
    marginLeft: 20,
  },
  updateMoneyInfo:{
    fontSize: 24,
    marginRight: 20,
  },
  itemDelete: {
    marginEnd: 10,
    alignItems: 'center',
  },
  itemPriceFood: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewButton: {
    backgroundColor: constants.COLOR.ORANGE,
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  viewButtonDisable: {
    backgroundColor: constants.COLOR.GREY,
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },

  viewAddress: {
    width: 380,
    marginTop: 10,
  },
  textAddress: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
  },
  /*Body*/
});

export default Styles;
