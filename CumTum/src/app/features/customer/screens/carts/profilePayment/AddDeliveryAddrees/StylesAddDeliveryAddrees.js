import {StyleSheet, Text, View} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
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
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
    // marginTop: 10,
  },
  //body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
  },
  viewFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.GREEN,
    width: '100%',
    height: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop:5,
  },


  // footer

  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOR.PRIMARY,

  },
  btnSave: {
    width: 200,
    height: 50,
    backgroundColor: constants.COLOR.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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
});
export default styles;
