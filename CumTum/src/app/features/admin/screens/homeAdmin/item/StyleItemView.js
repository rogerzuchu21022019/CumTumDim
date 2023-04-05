import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {},
  header: {},
  /* Body */
  body: {},
  boxItem: {
    marginTop: 20,
    backgroundColor: constants.COLOR.GREY,
    flex: 1,
    width: '100%',
    height: 100,
    borderRadius: 20,
    padding: 20,
  },
  itemOrder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.RED,
  },
  boxStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: constants.COLOR.AQUA,
    alignItems: 'center',
    flex: 1,
  },
  // status1: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  // status3: {
  //   flex: 1,
  // },
  // status2: {
  //   // backgroundColor: constants.COLOR.RED,
  //   flex: 1,
  //   // marginLeft: 120,
  // },
  itemText: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
  },
  statusItemText: {
    color: constants.COLOR.RED,
  },
  /* Body */
  /* Footer */
  footer: {
    marginBottom: 20,
  },
  /* Footer */
});

export default styles;
