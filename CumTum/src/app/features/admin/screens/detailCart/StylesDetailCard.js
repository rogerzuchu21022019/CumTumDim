import {StyleSheet} from 'react-native';
import { constants } from '../../../../shared/constants';

const StylesDetailCard = StyleSheet.create({
    container: {
        flex:1,
    },
    // /*Header*/ 
    header: {
        flex:1,
        backgroundColor: '#252121',
        justifyContent:'flex-end',
    
    },
    groupItemHeader:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#252121',
        paddingStart:10,

    },
    strikethrough:{
        height:2,
        backgroundColor:'black',
        marginTop:10,
    },
    textTitle:{
        color:'white',
    },
    
    // /*Header*/ 

    // /*Body*/ 
    body: {
        flex: 12,
        marginTop: 2,
        width: '100%',
        height: '100%',
        backgroundColor: constants.COLOR.BLACK,
        marginBottom: 2,
        overflow: 'hidden',
      },
    
      divideLine: {
        height: 2,
        width: '100%',
        backgroundColor: constants.COLOR.WHITE,
        marginTop: 20,
        marginBottom: 20,
      },
    
      viewScrollList: {
        flex: 1,
        width: '100%',
        minHeight: 500,
        alignItems: 'center',
        // backgroundColor: constants.COLOR.ORANGE,
      },
      scrollView: {
        flexGrow: 1,
      },
      viewFlashList: {
        flex: 10,
        width: '100%',
        minHeight: 300,
        // backgroundColor: constants.COLOR.WHITE,
      },
    
      viewMainDishes: {
        flex: 1,
        width: '100%',
        minHeight: 300,
        // backgroundColor: constants.COLOR.AQUA,
      },
    
      viewExtraDishes: {
        flex: 1,
        width: '100%',
        minHeight: 300,
        // backgroundColor: constants.COLOR.AQUA,
      },
    
      viewToppings: {
        flex: 1,
        width: '100%',
        minHeight: 300,
    
        // backgroundColor: constants.COLOR.AQUA,
      },
      viewAnother: {
        flex: 1,
        width: '100%',
        minHeight: 300,
        // backgroundColor: constants.COLOR.AQUA,
      },
      viewTextHeader: {
        paddingLeft: '5%',
        paddingRight: '5%',
      },
      viewTextTotalMoney: {
        // backgroundColor: constants.COLOR.AQUA,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        marginEnd:20
    
      },
    
      viewTotal: {
        minHeight: 200,
        // backgroundColor: constants.COLOR.YELLOW,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        // flex: 1,
      },
      viewBoxShowInfoBill: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: constants.COLOR.WHITE,
      },
      viewBoxShowSubInfoBill: {
        paddingLeft: 20,
      },
      textInfo: {
        color: constants.COLOR.WHITE,
        fontSize: 16,
        lineHeight: 30,
      },
      updateSubText: {
        fontSize: 16,
      },
      updateMoney: {
        fontSize: 14,
        color: constants.COLOR.WHITE,
      },
      updateTextInfo: {
        fontSize: 24,
      },
      itemDelete:{
        marginEnd:10,
        alignItems: 'center',
      },
      itemPriceFood:{
        width:50,
        flexDirection:'row',
        justifyContent: "flex-end",
    },
    viewButton:{
      backgroundColor:constants.COLOR.ORANGE,
      height:40,
      width:150,
      alignItems: 'center',
      justifyContent: "center",
      borderRadius:10
      
    },
    textButton:{
      color:constants.COLOR.WHITE,
      fontSize:16,
      fontWeight:'500',
    },
    groupButton:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      width:'100%',
      marginTop:20,
      marginBottom:20,
    },
     /*Body*/ 

   
})
export default StylesDetailCard
