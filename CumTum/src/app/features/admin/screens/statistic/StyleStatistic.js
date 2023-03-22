import {StyleSheet} from 'react-native';
import { constants } from '../../../../shared/constants';

const StyleStatistic = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
  },

  imageLogo: {
    width: 40,
    height: 40,
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 20,
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: constants.COLOR.WHITE,
    marginRight: 20,
  },
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
    // marginTop: 10,
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  //header

  //body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.BLACK,
    alignItems: 'center',
  },
  groupItem: {},
  viewFlashList: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  itemOder: {
    flexDirection: 'row',
    backgroundColor: '#2F2D2D',
    width: 350,
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 15,
  },

  //body
});
export default StyleStatistic;
