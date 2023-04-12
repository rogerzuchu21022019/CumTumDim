import {StyleSheet} from 'react-native';
import {constants} from '../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: constants.COLOR.WHITE,
  },
  /* Header */
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
    marginStart:20,
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
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  textTotalNotifies:{
    fontSize:10,
    color: constants.COLOR.WHITE,
  },
  viewTotalNotifies:{
    backgroundColor: constants.COLOR.RED,
    width:30,
    height:15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    bottom:8,
    right:10,
  },

  
  /* Header */

  //body
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.PRIMARY,
    // width:'100%'
  },
  groupItem: {},
  viewFlashList: {
    flex: 1,
    // backgroundColor: constants.COLOR.GREEN,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  viewToday: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textToday: {
    lineHeight: 30,
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },

  //body
});
export default styles;
