import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  header: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxButton: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    // backgroundColor: constants.COLOR.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textButton: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: constants.COLOR.RED,
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
    marginBottom: 40,
  },

  textHeader: {
    color:constants.COLOR.WHITE,
    fontSize:16,
    fontWeight:'bold',
  },
  boxTextHeader: {
    flex: 1,
    alignItems: 'center',
  },

  /* Body */
  body: {
    flex: 12,
    marginTop: 2,
    width: '100%',
    height: '100%',
    // backgroundColor: constants.COLOR.ORANGE,
    marginBottom: 2,
    overflow: 'hidden',
  },

  divideLine: {
    height: 2,
    width: '100%',
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
    minHeight: 300,
    // backgroundColor: constants.COLOR.AQUA,
  },

  viewExtraDishes: {
    flex: 1,
    width: '100%',
    minHeight: 300,
    // backgroundColor: constants.COLOR.AQUA,
  },

  viewToppings: {
    flex: 1,
    width: '100%',
    minHeight: 300,

    // backgroundColor: constants.COLOR.AQUA,
  },
  viewAnother: {
    flex: 1,
    width: '100%',
    minHeight: 300,
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
    marginEnd:20

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
  textInfo: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    lineHeight: 30,
  },
  updateSubText: {
    fontSize: 16,
  },
  updateMoney: {
    fontSize: 14,
  },
  updateTextInfo: {
    fontSize: 24,
  },
  itemDelete:{
    marginEnd:10,
    alignItems: 'center',
  },
  itemPriceFood:{
    width:50,
    flexDirection:'row',
    justifyContent: "flex-end",
},

  /* Body */
  footer: {
    // flex: 2,
    // backgroundColor: constants.COLOR.YELLOW,
  },
});
export default styles;
