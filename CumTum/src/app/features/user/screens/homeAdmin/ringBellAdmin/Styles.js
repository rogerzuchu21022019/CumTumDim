import {StyleSheet, Text, View} from 'react-native';
import {constants} from '../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  // header
  header: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 2,
    backgroundColor: constants.COLOR.PRIMARY,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
    alignItems: 'center',
  },
  profile: {},

  textProfile: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewIcon: {},
  // header

  // body
  body: {
    flex: 14,
    backgroundColor: constants.COLOR.PRIMARY,
  },
  groupItemBody: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 10,
    backgroundColor: constants.COLOR.DARK_BROWN,
    borderRadius: 10,
  },
  leftItem: {
    width: '100%',
    padding: 10,
  },
  textTitleLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    color: constants.COLOR.ORANGE,
  },
  textContent: {
    color: constants.COLOR.WHITE,
    fontSize: 14,
  },
});

export default styles;
