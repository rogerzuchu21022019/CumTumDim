import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
  },

  containerPaypal: {
    flex: 1,
    backgroundColor: constants.COLOR.WHITE,
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
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 22,
  },
  updateTitlePaypal: {
    color: constants.COLOR.BLACK,
    fontSize: 20,
    marginLeft: 20,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  icon:{
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
  },
  icon:{
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
  },
  /* Header */

  //body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.GREY,
  },
  viewText: {
    padding:20,

  },
  textTile:{
    marginBottom:10
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: constants.COLOR.WHITE,
  },
  text1: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: constants.COLOR.WHITE,
  },
  viewText1:{
    marginTop:20,
    marginStart:20
  },
  viewPaypal: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: constants.COLOR.YELLOW,
    backgroundColor: constants.COLOR.YELLOW,
    width: '100%',
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewVisa: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.WHITE,
    backgroundColor: constants.COLOR.WHITE,
    width: '100%',
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewZaloPay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.LIGHT_BLUE,
    backgroundColor:constants.COLOR.LIGHT_BLUE,
    width: '100%',
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  groupText:{
    padding: 20,

  },
  viewMomo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.PINK_MOMO,
    backgroundColor:constants.COLOR.PINK_MOMO,
    width: '100%',
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  viewLiveToPaid: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.COLOR.GREEN,
    backgroundColor:constants.COLOR.GREEN,
    width: '100%',
    height: 75,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  line:{
    width: '100%',
    height:2,
    backgroundColor:constants.COLOR.BLACK,
  },
  viewImage1: {
    flex: 1/2,
  },
  iconLocation:{
    marginEnd:10,
  },
  modal:{
    backgroundColor:constants.COLOR.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: constants.COLOR.ORANGE,
  },
  checkMarkImage: {
    height: 54,
    width: 54,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },

  checkMarkVisa: {
    height: 40,
    width: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  viewTextPay: {
    flex: 1,
  },
  textPaypal: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: constants.COLOR.WHITE,
  },
  viewTextVisa: {
    flex: 1,
  },
  textVisa: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: constants.COLOR.BLACK,
  },
  viewTextZaloPay: {
    flex: 1,
    // backgroundColor:constants.COLOR.GREEN
  },
  textZaloPay: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: constants.COLOR.WHITE,
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
  rightContent:{

  },
  leftContent:{
    flexDirection: 'row',

  },
  groupContent:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  btnNext: {
    // backgroundColor: constants.COLOR.RED,
    fontWeight: '700',
    fontSize: 20,
    color: constants.COLOR.WHITE,
  },
 
});
export default styles;
