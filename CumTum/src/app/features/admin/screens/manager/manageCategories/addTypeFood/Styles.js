import {StyleSheet} from 'react-native';
import { constants } from '../../../../../../shared/constants';
const Styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'black',
},
// header
header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
    marginBottom:2,
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
    // marginLeft: ,
  },
  viewInput:{

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
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageReturn: {
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 5,
    marginRight: 5,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },

  //body
  body: {
    flex:12,
    backgroundColor: '#252121',
    alignItems:'center',
    justifyContent:"space-evenly"
    
},

  viewTextInput:{
    width:"100%",
  },
  viewInput:{
    backgroundColor: constants.COLOR.WHITE,
    height:40,
    marginRight:20,
    marginLeft:20,
    borderRadius:10,
    justifyContent:"center",
    alignItems: "center",

  },
  textInput:{
    width:"100%",
    paddingLeft:20,
  },
  viewBTN:{
    backgroundColor: constants.COLOR.ORANGE,
    height:40,
    width:150,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{ 
    color: constants.COLOR.WHITE,
    fontWeight:"600",
    fontSize:18
  },
  cartToon: {
    width: '100%',
  },
  imageCartToon: {
    width: 160,
    height: 160,
  },
  imageCartToonTop: {
    width: '100%',
    alignItems: 'flex-end',
  },
  imageCartToonHead: {
    width: 200,
    height: 200,
  },


})
export default Styles