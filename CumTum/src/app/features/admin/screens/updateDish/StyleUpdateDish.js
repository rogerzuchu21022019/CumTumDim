import { StyleSheet} from 'react-native'
import { constants } from '../../../../shared/constants'




const StyleUpdateDish = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    // header
    header: {
        flex:1,
        backgroundColor: '#252121',
        justifyContent:'flex-end',
    
    },
    groupItemHeader:{
        flexDirection:'row',
        alignItems:'center',
        
        justifyContent:'space-evenly',
        paddingEnd:220

    },
    strikethrough:{
        height:2,
        backgroundColor:'black',
        marginTop:10,
    },
    textTitle:{
        color:'white',
    },
    groupFinal:{
        flexDirection:'row',
        alignItems:'center',
    },
    // body
    body: {
        flex:12,
        backgroundColor: '#252121',

    },
    groupFinalBody:{
        flex:1,
        backgroundColor:constants.COLOR.BLACK,
        width:'100%',
        alignItems:'center',
    },
    viewImage:{
        width:130,
        height:130,
        backgroundColor:'red',
    },  
    itemImage: {
        width: '100%', height: '100%'
    },
    groupItem:{
        width: 400,
        marginStart:40,
        marginBottom:20,
    },
    viewNameEat:{

    },
    itemNameEat:{
        marginStart:10,
        marginBottom:5,

    },
    viewInputPrice:{
        backgroundColor:constants.COLOR.WHITE,
        width:350,
        borderRadius:10,


    },
    itemInputPrice:{

    },
    viewBTN:{
        backgroundColor:constants.COLOR.YELLOW,
        marginTop:30,
        width:130,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    },
    textBTN:{
        color:constants.COLOR.WHITE,
        fontSize:20,
    }
})
export default StyleUpdateDish
