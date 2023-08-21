import {StyleSheet} from 'react-native';
import {constants} from '../../shared/constants';
const styles = StyleSheet.create({
  body: {
    width: '100%',
    backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    borderColor: constants.COLOR.RED,
    borderWidth: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: constants.COLOR.BLACK,
    paddingBottom: 5,
  },
  message: {
    fontSize: 16,
    color: constants.COLOR.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  boxButton: {
    flexDirection: 'row',
  },
  styleBtn: {
    marginLeft: 10,
    backgroundColor: constants.COLOR.YELLOW,
    padding: 10,
    borderRadius: 10,
  },
  styleText: {
    color: constants.COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },

  boxMessage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
