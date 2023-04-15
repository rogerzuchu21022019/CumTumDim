import { StyleSheet, Text, View } from 'react-native'
import { constants } from '../../../../../shared/constants'



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,

    },
    // header
    header:{
        flex: 1,
        justifyContent:"center",
        marginBottom:2,
        backgroundColor:constants.COLOR.PRIMARY,

    },
    groupHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginStart:20,
        marginEnd:20,
        alignItems:"center",
    },
    profile:{
    },
   
    
    textProfile:{
        color:constants.COLOR.WHITE,
        fontSize:16,
        fontWeight:'bold',
    },
    viewIcon:{
    },
    // header


    // body 
    body:{
        flex:14,
        backgroundColor:constants.COLOR.PRIMARY,
    },
    groupItemBody:{
        width:"100%",
        alignItems:"center",
        marginTop:10,


    },
    listItem:{
        flexDirection:"row",
        width:"90%",
        marginBottom:10,
        backgroundColor:constants.COLOR.DARK_BROWN,
        borderRadius:10,

    },
    leftItem:{
        width:"60%",
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,

    },
    textTitleLeft:{
        fontSize:16,
        fontWeight:"bold",
        color:constants.COLOR.ORANGE,
    },
    rightItem:{
        width:"40%",
        alignItems:"flex-end",
        paddingTop:10,
        paddingBottom:15,
        paddingRight:10,
        


    },
    textContent:{
        color:constants.COLOR.WHITE,
        fontSize:14,
    },
    viewTextRight:{
        marginBottom:10,

    },
    textRight:{
        fontSize:14,
        color:constants.COLOR.WHITE,

    },

})


export default styles
