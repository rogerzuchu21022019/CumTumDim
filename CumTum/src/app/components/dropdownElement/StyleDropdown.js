import {StyleSheet} from 'react-native';
import {constants} from '../../shared/constants';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: constants.COLOR.WHITE,
    margin: 20,
    paddingVertical: 20,
  },
  dropdown: {
    height: 50,
    borderColor: constants.COLOR.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default styles;
