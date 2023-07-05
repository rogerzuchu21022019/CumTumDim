import { StyleSheet } from 'react-native';
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
    marginBottom: 2,
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
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
  },
  tabsIncome: {
    width: '100%',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabRevenue: {
    width: 180,
    height: 48,
    backgroundColor: constants.COLOR.DARK_BROWN,
    borderRadius: 10,
  },
  tab1: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTab: {
    color: constants.COLOR.WHITE,
    fontWeight: '700',
    bottom: 1,
  },
  textTab1: {
    color: constants.COLOR.WHITE,
    fontWeight: '700',
    right: 10,
    bottom: 1,
  },
  tabChart: {
    width: 180,
    height: 48,
    backgroundColor: constants.COLOR.DARK_BROWN,
    borderRadius: 10,
  },
  tab2: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyTabRevenue: {
    width: '100%',
    flex: 1,
    marginVertical: 20
  },
  dateRangePickerContainer: {

  },
  dateRangePickerText: {
    top: 10,
    flexDirection: 'row',
    gap: 10,
    marginLeft: 12,
    color: constants.COLOR.WHITE,
    fontWeight: '500',
  },
  dateRangePickerText1: {
    width: 180,
    height: 40,
    left: 0,
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor: constants.COLOR.ORANGE,
  },
  dateRangePickerText3: {
    backgroundColor: constants.COLOR.DARK_BROWN,
    width: 183,
    height: 40,
    // marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 9,
    borderWidth: 1,
  },
  dateRangePickerText2: {
    color: constants.COLOR.WHITE,
    fontWeight: '500',
    textAlign: 'center',
    top: 8,
  },
  dateRangePickerText4: {
    top: 10,
    // marginLeft: 12,
    color: constants.COLOR.WHITE,
    fontWeight: '500',
    textAlign: 'center',
  },
  datePickerContainer: {
    marginTop: 50,
    height: 200,
    top: 100,
    alignItems: 'center',
    alignSelf: 'center',
    gap: 25,
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 1,
  },

  boxButton: {
    marginTop: 100
  },
  buttonTouch: {
    width: 310,
    // top: 110,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: constants.COLOR.ORANGE,
    borderRadius: 10,
    borderWidth: 1,
  },
  itemTabDoanhThu: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateText: {
    color: constants.COLOR.WHITE,
    fontWeight: '700',
  },
  itemTabDate: {
    flexDirection: 'row',
  },
  TextDoanhThu: {
    color: constants.COLOR.WHITE,
    fontWeight: '700',
  },
  bodyTabBieuDo: {
    backgroundColor: 'blue',
  },
  viewItem1: {
    backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: constants.COLOR.WHITE,
    fontWeight: '400',
    fontSize: 17,
  },
  itemOder: {
    flexDirection: 'row',
    backgroundColor: constants.COLOR.DARK_BROWN,
    height: 95,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 17,
  },
  itemText1: {
    color: constants.COLOR.ORANGE,
    fontSize: 15,
    marginVertical: 6,
  },

  boxIncome: {
    // backgroundColor:constants.COLOR.GREEN,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemText: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
    marginVertical: 6,
  },
  /*body */
});
export default StyleStatistic;
