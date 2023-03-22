import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { constants } from '../../../../../shared/constants'



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,
    },
    // header: 
    header:{
        backgroundColor:constants.COLOR.RED,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupHeader:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    tvEdit:{
        color:constants.COLOR.WHITE,
        fontSize:15,
    },
    textProfile:{
        color:constants.COLOR.WHITE,
        fontSize:15,
        fontWeight:'bold',
    },
    // header: 

    //body
    body:{
        flex:7,
        backgroundColor:'blue',
        alignItems: 'center',
    },
    imageProfile:{
        width:80,
        height:80,
    },
    textTitle:{
        color:constants.COLOR.WHITE,
        fontSize:15,
    },
    textInput:{

    },
    viewTitle:{
        marginBottom:10,
    },
    viewInput:{
        backgroundColor:constants.COLOR.WHITE,
        borderRadius:10,
    
    },
    groupAll:{
        backgroundColor:"green",
        width:350,
    },
    item:{
        marginBottom:20,
    },
    viewImage:{
        backgroundColor:constants.COLOR.WHITE,
    },
    // body
})
export default styles
