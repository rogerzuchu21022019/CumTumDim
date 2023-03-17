import {StyleSheet} from 'react-native';


const StylesHome = StyleSheet.create({
    container:{
        flex:1,
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
    //header


    //body
    body: {
        flex:7,
        backgroundColor: '#252121',
        alignItems:'center',
    },
    groupItem:{
    },
    viewFlashList:{
        flex: 1,
        backgroundColor:'green',
    },
    itemOder:{
        flexDirection:'row',
        backgroundColor:'#2F2D2D',
        width:350,
        height:40,
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:5,
        marginTop:10,
    },
    itemText:{
        color:'white',
        fontSize:15
    },
   

   
    //body
})
export default StylesHome