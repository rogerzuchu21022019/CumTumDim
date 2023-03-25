import {StyleSheet} from 'react-native';
import {constants} from '../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  // header
  header: {
    flex: 3,
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
  },
  profile: {
    // marginTop: 50,
    // flex: 1,
  },

  tvEdit: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
  },
  textProfile: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },

  // header

  // body
  body: {
    flex: 8,
    backgroundColor: constants.COLOR.GREY,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  viewImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
  },
  itemImage: {
    width: 250,
    height: 250,
  },
  groupAll: {
    width: 350,
  },
  item: {
    marginBottom: 10,
  },
  viewTitle: {
    marginBottom: 10,
  },
  textTitle: {
    color: constants.COLOR.WHITE,
    fontSize: 18,
  },
  viewInput: {
    backgroundColor: constants.COLOR.WHITE,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  },
  btnSave: {
    width: 200,
    height: 50,
    backgroundColor: constants.COLOR.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  textSave: {
    fontSize: 18,
    color: constants.COLOR.WHITE,
    fontWeight: '700',
  },
});
export default styles;
