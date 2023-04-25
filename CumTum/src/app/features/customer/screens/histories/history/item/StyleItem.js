import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: constants.COLOR.GREY,
    height: 80,
    borderRadius: 20,
    marginTop: 15,
  },

  itemText: {
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },
  viewImage: {
    justifyContent: 'center',
    textAlign: 'center',
    // backgroundColor: constants.COLOR.YELLOW,
    width: '20%',
    marginLeft: 20,
  },

  textItem: {
    color: constants.COLOR.WHITE,
  },
  textItemPaid: {
    color: constants.COLOR.RED,
  },
  boxView: {
    marginTop: 10,
    marginRight: 20,
    // backgroundColor: constants.COLOR.RED,
    flex: 1,
  },
  boxStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    // backgroundColor: constants.COLOR.YELLOW,
    width: '100%',
    flex: 1,
  },
  boxPrice: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    // backgroundColor: constants.COLOR.GREEN,
    justifyContent: 'space-between',
  },
});

export default styles;
