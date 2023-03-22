import {StyleSheet, Text, View} from 'react-native';
import { constants } from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'red',
  },
 /* Header */
 
header: {
  flex: 1,
  backgroundColor: constants.COLOR.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center',
},
textHeader: {
  color: constants.COLOR.WHITE,
  fontSize: 20,
},



divideLine: {
  height: 2,
  backgroundColor: constants.COLOR.BLACK,
},


/* Header */

body:{
  flex: 14,
  backgroundColor: constants.COLOR.PRIMARY,
  alignItems:'center',
  justifyContent: 'center',
},
iconCart:{
  width:150,
  height:150,
},
groupItem:{
  height:"50%",
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom:30,
},
textDescription:{
  color:constants.COLOR.RED,
  fontSize:20,
  fontWeight:'700'
},
btnConfirm:{
  backgroundColor:constants.COLOR.WHITE,
  height:50,
  width:150,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:25,
},
textConfirm:{
  color:'black',
  fontSize:20
}

});
export default styles;
