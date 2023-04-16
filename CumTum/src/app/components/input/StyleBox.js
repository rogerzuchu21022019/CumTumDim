import {constants} from '../../shared/constants';

const {StyleSheet} = require('react-native');

const styleBox = StyleSheet.create({
  container: {
    marginVertical: 10,
    // backgroundColor: constants.COLOR.RED,
    width: '100%',
    paddingHorizontal: 20,
  },

  body: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: constants.COLOR.WHITE,
    backgroundColor: constants.COLOR.WHITE,
  },
  boxTitle: {
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 16,
    color: constants.COLOR.WHITE,
  },
  boxInput: {
    width: '100%',
    // borderWidth:1,
    // borderColor: constants.COLOR.WHITE,
  },
  input: {
    width: '100%',
    // backgroundColor: constants.COLOR.RED,
    paddingLeft: 20,
    flex: 1,
    color: constants.COLOR.BLACK,
  },
  image: {
    width: 16,
    height: 16,
  },
  image2: {
    width: 16,
    height: 16,
  },
});

export default styleBox;
