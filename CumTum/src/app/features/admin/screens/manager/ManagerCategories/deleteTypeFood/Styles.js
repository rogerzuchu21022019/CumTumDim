import {StyleSheet} from 'react-native';
import { constants } from '../../../../../../shared/constants';
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    // header
    header: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: constants.COLOR.PRIMARY,
        alignItems: 'center',
      },
      imageLogo: {
        width: 40,
        height: 40,
      },
      leftHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: constants.COLOR.WHITE,
        // marginLeft: ,
      },
      rightHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: constants.COLOR.WHITE,
        marginRight: 20,
      },
      divideLine: {
        height: 2,
        backgroundColor: constants.COLOR.BLACK,
      },
      textTitle: {
        color: 'white',
        marginLeft: 6,
      },
      viewLogo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      imageReturn: {
        // backgroundColor: constants.COLOR.WHITE,
        marginLeft: 5,
        marginRight: 5,
      },
      mainHeader: {
        flexDirection: 'row',
        // backgroundColor: constants.COLOR.WHITE,
        alignItems: 'center',
      },
    // body
    body: {
        flex:12,
        backgroundColor: '#252121',
        alignItems:'center',
        
        
    },
  
    itemEat:{
        backgroundColor:'#2F2D2D',
        height:80,
        width:350,
        borderRadius:10,
        justifyContent: 'center',
        marginBottom:15,
        marginTop:10

    },
    itemNumber:{
        
    },
   

    numberItem:{
        color:'white',
        fontSize:15,
        fontWeight:"500"


    },
    itemQuantity:{
    },
   
  
    groupItem:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    itemName:{
        color:'white',
        fontSize:15,
        fontWeight:"500"
       

    },
    
    nameTitle:{
        color:'white',
        fontSize:20,
        paddingBottom:15,

    },
    
    itemImage:{
        height:25,
        width:25
    }

})
export default Styles