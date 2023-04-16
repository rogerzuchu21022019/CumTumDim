import { StyleSheet} from 'react-native'
import { constants } from '../../../../../../shared/constants'




const StyleUpdateDish = StyleSheet.create({
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
        marginBottom:2,
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
        flex:9,
        backgroundColor: '#252121',

    },
    groupFinalBody:{
        alignItems:'center',
        justifyContent:'center',

    },
    viewImage:{
        width:200,
        height:200,
        // backgroundColor:'red',
        borderRadius:10,
        marginTop:15,
        marginBottom:100,
        
    },
    itemImage:{
        width:200,
        height:200,
    },
    groupItem:{
        marginBottom:10,
        width:'100%'
    },
    viewNameEat:{
    },
    itemNameEat:{ 
        color:constants.COLOR.WHITE,
        fontSize:15,
        marginBottom:10
},
    viewInputPrice:{
        width:350,
        height:40,
        backgroundColor:constants.COLOR.WHITE,
        borderRadius:5,
    },

    //footer
   
    footer:{
        flex:3,
        backgroundColor: '#252121',
        alignItems:'center',
    },
    viewBTN:{
        backgroundColor:constants.COLOR.ORANGE,
        width:200,
        height:50,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center',
    },
    textBTN:{
        color:constants.COLOR.WHITE,
        fontSize:20,
    },
   
   
})
export default StyleUpdateDish
