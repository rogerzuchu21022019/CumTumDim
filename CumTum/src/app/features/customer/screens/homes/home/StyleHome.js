const {StyleSheet} = require('react-native');
const {constants} = require('../../../../../shared/constants');

const styles = StyleSheet.create({
  container: {
    flex: 10,
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
    width: 40,
    height: 40,
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
    // backgroundColor: constants.COLOR.YELLOW,
  },

  boxInfoDish: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: constants.COLOR.GREY,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  customTabBar: {
    backgroundColor: constants.COLOR.PRIMARY,
    marginLeft: 20,
    marginRight: 20,
  },

  imageIcon: {
    width: 30,
    height: 30,
  },

  boxHandleAmount: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // width: '0%',
    // backgroundColor: constants.COLOR.YELLOW,
    alignItems: 'center',
  },
  boxIcon: {
    flex: 1,
    // backgroundColor: constants.COLOR.WHITE,
  },

  textName: {
    color: constants.COLOR.WHITE,
  },
  boxIndex: {
    flex: 1 / 2,
    justifyContent: 'flex-start',
    // backgroundColor: constants.COLOR.WHITE,
  },

  textNameUpdate: {
    fontSize: 20,
  },

  textBoxNameUpdate: {
    fontSize: 16,
  },
  imageDish: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  boxShowAmount: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft:15
    // backgroundColor: constants.COLOR.WHITE,
  },
  boxShowImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: constants.COLOR.AQUA,
  },
  boxShowNamePrice: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: constants.COLOR.ORANGE,
    height: '100%',
    justifyContent: 'space-around',
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
