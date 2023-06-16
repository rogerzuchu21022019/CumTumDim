import {StyleSheet} from 'react-native';
import {constants} from '../../shared/constants';

const styles = StyleSheet.create({
  /* Container */
  container: {},
  /* Container */
  /* Header */
  header: {},
  /* Header */
  /* Body */
  body: {},
  boxBtnSave: {
    backgroundColor: constants.COLOR.ORANGE,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textSave: {
    color: constants.COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  /* Body */
  /* Footer */
  footer: {},
  /* Footer */
});

export default styles;
