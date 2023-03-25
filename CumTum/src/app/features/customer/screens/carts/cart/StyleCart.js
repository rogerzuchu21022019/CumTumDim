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
  },

  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
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
  },
  viewScrollList: {
    flex: 1,
    width: '100%',
    // minHeight: 200 ,
    alignItems: 'center',
  },
  viewFlashList: {
    flex: 10,
    width: '100%',
    // backgroundColor: constants.COLOR.WHITE,
  },

  viewMainDishes: {
    flex: 1,
    width: '100%',

    // backgroundColor: constants.COLOR.AQUA,
  },

  viewExtraDishes: {
    flex: 1,
    width: '100%',
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
    // backgroundColor: constants.COLOR.AQUA,
  },
  /* Body */
  footer: {
    // flex: 2,
    // backgroundColor: constants.COLOR.YELLOW,
  },
});
export default styles;
