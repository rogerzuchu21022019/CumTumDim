import {StyleSheet, Text, View} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: constants.COLOR.WHITE,
  },
  header: {},

  /* Body */
  body: {},

  boxInfoDish: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: constants.COLOR.GREY,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  customTabBar: {
    backgroundColor: constants.COLOR.PRIMARY,
    marginLeft: 20,
    marginRight: 20,
  },

  imageIcon: {
    width: 30,
    height: 30,
  },

  boxHandleAmount: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // width: '0%',
    alignItems: 'center',
    justifyContent:'center',
  },
  boxIcon: {
    flex: 1,
    // backgroundColor: constants.COLOR.WHITE,
  },

  textName: {
    color: constants.COLOR.WHITE,
    fontSize:12,
  },
  updateColor: {
    color: constants.COLOR.ORANGE,
  },

  boxIndex: {
    flex: 1 / 2,
    justifyContent: 'flex-start',
    // backgroundColor: constants.COLOR.WHITE,
  },

  textNameUpdate: {
    fontSize: 14,
  },

  textBoxNameUpdate: {
    fontSize: 12,
  },
  imageDish: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  boxShowAmount: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginLeft:15,
    height: '100%',
    // backgroundColor: constants.COLOR.WHITE,
  },
  boxShowImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: constants.COLOR.AQUA,
  },
  boxShowNamePrice: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: constants.COLOR.ORANGE,
    height: '100%',
    justifyContent: 'space-around',
  },
  /* Body */

  footer: {},
});

export default styles;
