import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
  },

   /* Header */
   header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
  },
  leftHeader: {
    flex: 1,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: constants.COLOR.WHITE,
  },
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
    // marginTop: 10,
  },
  textTitle: {
    color: constants.COLOR.WHITE,
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 22,
  },
  updateTitlePaypal: {
    color: constants.COLOR.BLACK,
    fontSize: 20,
    marginLeft: 20,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  icon:{
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
  },
  icon:{
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
  },
  /* Header */

body: {
  flex: 12,
  backgroundColor: constants.COLOR.PRIMARY,
},
viewText:{
  paddingLeft:24,
  paddingTop:5
  // backgroundColor:constants.COLOR.RED
},
textAddress:{
  color:constants.COLOR.WHITE,
  fontStyle:'normal',
  fontWeight:'500',
  fontSize:16,
  lineHeight:22
},
viewFlashList: {
  flex: 1,
  // backgroundColor: constants.COLOR.GREEN,
  width: '100%',
  height: '100%',
  paddingRight: 20,
  paddingLeft: 20,
  paddingBottom: 20,
  paddingTop:5,
},
footer:{

  flex:4,
  backgroundColor: constants.COLOR.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center'
},
viewFooter:{
  flex: 2,
},
viewButtonNext: {
  backgroundColor: constants.COLOR.ORANGE,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  height: 52,
  paddingLeft:24,
  paddingRight:24
},
btnNext: {
      fontWeight: '700',
      fontSize: 20,
      color: constants.COLOR.WHITE,
    },
});
export default styles;
