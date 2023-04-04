const {StyleSheet} = require('react-native');
const {constants} = require('../../../../../shared/constants');

const styles = StyleSheet.create({
  container: {
    flex: 10,
    // width: '100%',
    backgroundColor: constants.COLOR.BLACK,
  },

  /* Header */
  header: {
    flex: 6,
    justifyContent: 'flex-start',
    // backgroundColor: constants.COLOR.PRIMARY,
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 20,
  },
  imageLogo: {
    width: 50,
    height: 50,
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
    backgroundColor: constants.COLOR.GREY,
    // marginBottom:2
    // marginTop: 2,
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  mainViewHeader: {
    flexDirection: 'row',
    flex: 1 / 5,
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerViewHeader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundColor: constants.COLOR.ORANGE,
    zIndex: -3,
    // bottom: -300,
  },

  /* imageBackground */
  imageBackgroundHeader: {
    flex: 1,
    // backgroundColor: constants.COLOR.ORANGE,
  },
  positionInImageBackground: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    marginTop: 56,
  },
  /* imageBackground */

  /* Header */

  /* Body */
  body: {
    flex: 12,
    // backgroundColor: constants.COLOR.PRIMARY,
  },

  /* First Body */
  firstBody: {
    flex: 1,
    marginTop: 3,
    backgroundColor: constants.COLOR.BLACK,
  },

  boxTabs: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.RED,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  boxMainDishes: {
    // backgroundColor: constants.COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNameDishes: {
    color: constants.COLOR.WHITE,
  },

  textNameDishesChoosing: {
    color: constants.COLOR.ORANGE,
  },
  viewImageDish: {
    marginTop: 5,
  },

  boxFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.WHITE,
    marginTop: 10,
    width: '100%',
  },
  boxDropdownList: {
    // width: '100%',
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: constants.COLOR.YELLOW,
    marginTop: 5,
  },
  dropdownList: {
    backgroundColor: constants.COLOR.GREY,
  },

  /* First Body */

  /* Second Body */
  secondBody: {
    flex: 2 / 3,
    marginTop: 3,
    backgroundColor: constants.COLOR.WHITE,
  },
  /* Second Body */
  /* Body */

  /* Footer */
  //   footer: {
  //     flex: 1,
  //     backgroundColor: constants.COLOR.WHITE,
  //   },
  /* Footer */
});

export default styles;
