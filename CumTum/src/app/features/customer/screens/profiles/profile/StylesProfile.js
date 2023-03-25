import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {constants} from '../../../../../shared/constants';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,
    },
    // header: 
    header:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconHeader:{
        width:25,
        height:25,
    },
    profile:{

    },
    groupHeader:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingEnd:20,
        paddingStart:20,
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
        flex:8,
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
        fontSize:18,
        height:50
    },
    viewTitle:{
        marginBottom:10,
    },
    viewInput:{
        backgroundColor:constants.COLOR.WHITE,
        borderRadius:10,
    
    },
    groupAll:{
        width:350,
    },
    item:{
        marginBottom:20,
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
        marginTop:20,
      alignItems:'center',
    }
    // body
})
export default styles