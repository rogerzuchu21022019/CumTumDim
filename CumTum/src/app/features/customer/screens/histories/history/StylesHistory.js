import { constants } from '../../../../../shared/constants';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: constants.COLOR.PRIMARY,
  },

  /* Header */

  header: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
  },

  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
  },

  /* body */

  body: {
    flex: 14,
    backgroundColor: constants.COLOR.PRIMARY,
     
    
  },
  viewFlashList: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:20
  },
  itemOder: {
    flex: 12,
    flexDirection: 'row',
    backgroundColor: constants.COLOR.DARK_BROWN,

    height: 80,
    borderRadius: 20,
    marginTop: 15,  
  },
  viewText: {
    flex: 10,
    marginTop: 10,
  },
  itemText: {
    color: constants.COLOR.WHITE,
    fontSize: 12,
  
  },
  viewImage: {
    flex: 2,
    paddingLeft:20,
    justifyContent:'center',
    textAlign:'center',

  },
  viewText1: {
    flex: 4,
    flexDirection: 'row'
  },
  itemText1: {
    flex: 3,
    color: constants.COLOR.ORANGE,
    fontSize: 12,
  },
  itemText2: {
    flex: 1,
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },
  viewText2: {
    flex: 4,
    flexDirection: 'row'
  },
  itemText3: {
    flex: 1,
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },
  itemText4: {
    flex: 2,
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },
  itemText5: {
    flex: 2,
    color: constants.COLOR.WHITE,
    fontSize: 12,
  },

});
export default styles;
