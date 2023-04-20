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
  viewAll:{
    flex:1,
    paddingLeft:24,
    paddingRight:24,
    justifyContent:'center',
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5
  },
  viewSwitch:{
    flex:1,
  },
  viewText:{
    flex:2
  },
  text:{
    color: constants.COLOR.WHITE,
    fontSize: 16,
    fontWeight:'400'
    
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

  viewFooter:{
    flexDirection:'row',
    backgroundColor: constants.COLOR.ORANGE,
    borderRadius: 10,
    marginTop:5,
    width:210,
    height:50
  },
  viewIcon:{
    flex:1,
    justifyContent:'center',
    paddingLeft:15,

  
  },
  viewTextBtn:{
    justifyContent:'center',
    flex:3,
  },
  TextAdd:{
    color:constants.COLOR.BLACK,
    fontSize:20,
    fontWeight:'400',
    fontStyle:'normal',
  

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
