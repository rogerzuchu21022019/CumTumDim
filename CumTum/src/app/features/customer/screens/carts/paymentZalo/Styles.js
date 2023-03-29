import { StyleSheet} from 'react-native'
import { constants } from '../../../../../shared/constants'


const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:constants.COLOR.GREY,
      
    },

    // header
    header:{
        flex: 1,
        backfaceVisibility:constants.COLOR.GREY,
    },
    viewShowBill:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textShowBill:{
        fontSize:20,
        color:constants.COLOR.WHITE,
    },
   // body
    body:{
        flex:12,
        backgroundColor:constants.COLOR.BLACK,
        alignItems:'center',
    },
    head: {
        height:34
    },
    text: { margin: 6 },
    table:{
        borderWidth:2,
        
    },
    viewTable:{
        width:350,
    },
    viewText:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
    },
    text:{
        fontSize:15,
        color:constants.COLOR.BLACK,
        textAlign:'center',
        fontWeight:'500',
    },
    groupItem:{
        marginTop:20,
        alignItems: 'center',
        backgroundColor:constants.COLOR.WHITE,
        width:'90%',
        paddingTop:30,
        paddingBottom:30,
        
        
    },
    textMoney:{
      fontSize:15,
      color:constants.COLOR.BLACK,
      textAlign:'center',

    },
    money:{
      height:30,
       
       
    },
    textTotalMoney:{
        fontSize:18,
        color:constants.COLOR.BLACK,
        textAlign:'center',
        fontWeight:"500"
    },
    totalMoney:{
        height:35,
    },
    
})

export default Styles
