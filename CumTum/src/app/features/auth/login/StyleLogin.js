const { StyleSheet } = require("react-native");

const stylesLogin = StyleSheet.create({
    container: {
        flex:10,
        backgroundColor:"#373232"
    },
    /*Header*/ 
    header: {
        flex:7,
        backgroundColor: 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width:414,
        height:513,
    },
    Textheader:{
        width:172,
        height:49,
        fontWeight:'900',
        fontSize:32,
        fontStyle:"normal",
        lineHeight:39,
        color:"white",
        top:30,
        left:130,
        alignItems: 'center',
  justifyContent: 'center',

    },
    imageHeader:{
        width:305,
        height:294,
        left:51,
        top:50
    },
    
    /*Header*/ 

    /*Body*/ 
    body: {
        flex:4,
        backgroundColor: '#373232',
       
    },
    imagebody1:{
        
        width:167,
        height:77,
        marginLeft:100,
        bottom:5,
    },
    imagebody2:{
        width:39,
        height:39,
        marginLeft:42,
        bottom:65,
    },
    TouchableOpacitybody:{
        backgroundColor:"white",
        width:262,
        height:59,
        left:76,
        top:100,
        borderRadius:30,
    },
     /*Body*/ 

    foosters: {

    },
})
export default stylesLogin