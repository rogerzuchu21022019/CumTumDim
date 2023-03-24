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
   
   
})
export default StyleUpdateDish
