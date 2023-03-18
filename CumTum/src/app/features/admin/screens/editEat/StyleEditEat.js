import {StyleSheet} from 'react-native';

const StyleEditEat = StyleSheet.create({
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
        flex:7,
        backgroundColor: '#252121',
        alignItems:'center',
        
        
    },
  
    itemEat:{
        backgroundColor:'#2F2D2D',
        flexDirection:'row',
        alignItems:'center',
        height:80,
        width:350,
        borderRadius:10,
        paddingStart:5,
        marginBottom:10,

    },
    itemNumber:{
        paddingEnd:10,
        
    },
   

    numberItem:{
        color:'white'

    },
    itemQuantity:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:80,
    },
    itemImg:{
        marginEnd:40,
        marginStart:20     
    },
    image:{
        width:60,
        height:60,
        borderRadius:10,

    },
    groupItem:{
        paddingEnd:50,
    },
    itemName:{
        paddingBottom:10,
        color:'white',
       

    },
    itemPrice:{
  
        color:'#FE724C'

    },
    nameTitle:{
        color:'white',
        fontSize:20,
        paddingBottom:15,

    },
    itemAddress:{
        marginBottom:10
    },
    textAddress:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    },
    Line:{
        height:1,
        backgroundColor:'white'
    },
    finalBtn:{
        justifyContent:'center,'
    },
    itemBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFB703',
        height:40,
        width:150,
        borderRadius:15
    },
    itemImage:{
        height:25,
        width:25
    }

})
export default StyleEditEat