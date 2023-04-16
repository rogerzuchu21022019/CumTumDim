import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  textTitle:{
    color:constants.COLOR.WHITE,
    fontSize:18,
},
textInput:{
    marginStart:20,
    fontSize:16,

},
viewTitle:{
    marginBottom:5,
},
viewInput:{
    backgroundColor:constants.COLOR.WHITE,
    borderRadius:10,
    height:40,
    justifyContent:"center",

},
iconCamera:{
    alignItems:'flex-end',
    bottom:30,
    marginEnd:10
},
iconCameraStyle:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:constants.COLOR.WHITE,
    alignItems:'center',
    justifyContent: 'center',
},
groupAll:{
    width:350,
    height:'100%',
    justifyContent:'center'
},
item:{
    
    marginBottom:10,
},
viewTextName:{
    marginTop:10,
    alignItems:'center',
},
btnSave:{
    width:200,
    height:50,
    backgroundColor:constants.COLOR.ORANGE,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:20,
    marginTop:10
},

});

export default styles;
