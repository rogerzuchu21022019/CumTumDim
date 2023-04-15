import { StyleSheet} from 'react-native'
import { constants } from '../../../../../shared/constants'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,
    },
    // header
    header:{
        flex: 3,
    },
    groupHeader:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginStart:10,
        marginTop:25,
        marginEnd:10,
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

    // header

    // body 
    body:{
        flex:8,
        backgroundColor:constants.COLOR.GREY,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        alignItems: 'center',
    },
    viewImage:{
        width:300,
        height:300,
        borderRadius:150,
        backgroundColor:constants.COLOR.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:100


    },
    itemImage:{
        width:250,
        height:250,

    },
    groupAll:{
        marginBottom:20
    },
    item:{
        marginBottom:15,
    },
    textInput:{
    
    },

    viewInput:{
        backgroundColor:constants.COLOR.WHITE,
        borderRadius:25,
        alignItems: "center",
        justifyContent: "center",
        height:50,
        width:200
    
    },
    btnSave:{
        width:250,
        height:60,
        backgroundColor:constants.COLOR.ORANGE,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:30,
        marginTop:10
    },
    textSave:{
        fontSize:18,
        color:constants.COLOR.WHITE,
        fontWeight:"700"
    },
})
export default styles
