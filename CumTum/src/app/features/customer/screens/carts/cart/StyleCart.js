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
  },
  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
  },

  /* Body */
  body: {
    flex: 12,
    marginTop: 2,
    // backgroundColor: constants.COLOR.ORANGE,
    marginBottom: 2,
  },
  viewFlashList: {
    flex: 1,
    width: '100%',
    // backgroundColor: constants.COLOR.WHITE,
  },
  /* Body */
  footer: {
    flex: 2,
    // backgroundColor: constants.COLOR.YELLOW,
  },
  boxButton: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: constants.COLOR.GREY,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  textButton: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: constants.COLOR.ORANGE,
    width: 150,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
});
export default styles;
