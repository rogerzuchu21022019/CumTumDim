import { StyleSheet, Text, View } from 'react-native'
import { constants } from '../../../../../shared/constants'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,
    },
    // header: 
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
   
    profile:{

    },
   
    tvEdit:{
        color:constants.COLOR.WHITE,
        fontSize:15,
    },
    textProfile:{
        color:constants.COLOR.WHITE,
        fontSize:20,
        fontWeight:'bold',
    },
    // header: 

    //body
    body:{
        flex:6,
        backgroundColor:constants.COLOR.GREY,
        alignItems: 'center',
        borderTopStartRadius:35,
        borderTopEndRadius:35,

    },
    imageProfile:{
        width:80,
        height:80,
    },
    textTitle:{
        color:constants.COLOR.WHITE,
        fontSize:18,
    },
    textInput:{
        marginStart:20,
        fontSize:18
    },
    viewTitle:{
        marginBottom:10,
    },
    viewInput:{
        backgroundColor:constants.COLOR.WHITE,
        borderRadius:10,
    
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
    },
    item:{
        marginBottom:10,
    },
    viewImage:{
        backgroundColor:constants.COLOR.WHITE,
        height:110,
        width:110,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:55,
    },
    viewFinal:{
        bottom:40
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
    textSave:{
        fontSize:18,
        color:constants.COLOR.WHITE,
        fontWeight:"700"
    },


    // body


    })
export default styles
