import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: constants.COLOR.GREY,
    borderRadius: 20,
    marginTop: 15,
  },

  itemText: {
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },


  textItem: {
    color: constants.COLOR.WHITE,
    fontSize:14,
    lineHeight:22,
    fontStyle:'normal',
    fontWeight:'500'
  },
  textItem1: {
    flex:1,
    color: constants.COLOR.WHITE,
    // backgroundColor: constants.COLOR.BLACK,

  },
  textItem2: {
    flex:1,
    // backgroundColor:constants.COLOR.GREEN,
    color: constants.COLOR.WHITE,
  },
  textItem1: {
    flex:1,
    color: constants.COLOR.WHITE,
    // backgroundColor: constants.COLOR.BLACK,

  },
  textItem3: {
    // backgroundColor: constants.COLOR.BLACK,
    color: constants.COLOR.RED,
    fontStyle:'normal',
    fontSize:14,
    fontWeight:'700'

  },
  viewbtn:{
    // backgroundColor:constants.COLOR.BLUE
  },
  textItemPaid: {
    color: constants.COLOR.RED,
  },
  boxView: {
    flex:1,
    flexDirection:'row',
    paddingLeft:10,
    marginRight: 20,
    // backgroundColor: constants.COLOR.RED,

  },
  viewCheck:{
    justifyContent:'center',
  },
  boxStatus: {
    flex:1,
    
  },
  boxStatus1: {
    marginTop:15,
    flexDirection:'row',
    flex:1,

  },
  boxStatus2: {
    marginBottom:10,
    flex:1,
  },
  boxPrice: {
    flexDirection:'row',
    flex: 1,
  
  },
  boxPrice2: {
    flexDirection:'row',
    flex: 1,
  },

  checkboxChecked: {
    backgroundColor: constants.COLOR.ORANGE,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

});

export default styles;
