import {StyleSheet, Text, View} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  // header:
  header: {
    flex: 1,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 10,
    marginTop: 15,
    marginEnd: 10,
  },
  profile: {},
  tvEdit: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
  },
  textProfile: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  // header:

  //body
  body: {
    flex: 6,
    backgroundColor: constants.COLOR.GREY,
    alignItems: 'center',
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    marginBottom: 2,
  },

  // body

  // footer
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOR.GREY,
  },
  textSave: {
    fontSize: 18,
    color: constants.COLOR.WHITE,
    fontWeight: '700',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
  },
  viewFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.GREEN,
    width: '100%',
  },

  /* Dropdown */
  styleBorderWidth: {
    marginHorizontal:20,
    paddingVertical: 20,
    // backgroundColor:'white'
  },
  stylesLabel: {
    position: 'absolute',
    backgroundColor: constants.COLOR.YELLOW,
    left: 20,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    borderRadius: 8,
  },
  styleMain: {
    height: 50,
    borderColor: constants.COLOR.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: constants.COLOR.WHITE,
  },
  placeholderStyle: {
    // backgroundColor: constants.COLOR.WHITE,
  },
  itemContainerStyle: {
    backgroundColor: constants.COLOR.WHITE,
  },
  /* Dropdown */
});
export default styles;
