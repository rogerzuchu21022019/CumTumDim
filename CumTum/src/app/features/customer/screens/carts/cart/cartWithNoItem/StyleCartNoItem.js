import {StyleSheet, Text, View} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
  },
  /* Header */

  header: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight:'400'
  },

  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
  },

  /* Header */

  body: {
    flex: 14,
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCart: {
    width: 100,
    height: 100,
  },
  groupItem: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  textDescription: {
    color: constants.COLOR.RED,
    fontSize: 18,
    fontWeight: '900',
  },
  btnConfirm: {
    backgroundColor: constants.COLOR.RED,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  textConfirm: {
    fontSize: 18,
    color:constants.COLOR.WHITE,
    fontWeight:'500'
  },
});
export default styles;
