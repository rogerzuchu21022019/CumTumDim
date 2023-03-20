const {StyleSheet} = require('react-native');
const {constants} = require('../../../../../shared/constants');

const styles = StyleSheet.create({
  container: {
    flex: 10,
    // backgroundColor: constants.COLOR.ORANGE,
  },

  /* Header */
  header: {
    flex: 6,
    justifyContent: 'flex-start',
    backgroundColor: constants.COLOR.PRIMARY,
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
    backgroundColor: constants.COLOR.BLACK,
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
    backgroundColor: constants.COLOR.PRIMARY,
  },

  /* First Body */
  firstBody: {
    flex: 1 / 3,
    marginTop: 3,
    backgroundColor: constants.COLOR.WHITE,
  },
  /* First Body */


  /* Second Body */
  secondBody: {
    flex: 2/3,
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
