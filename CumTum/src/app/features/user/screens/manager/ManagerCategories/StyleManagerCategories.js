import { constants } from '../../../../../shared/constants';

const { StyleSheet } = require('react-native');

const StyleManagerCategories = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:constants.COLOR.BLACK,
    },
    /*Header*/
    header: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: constants.COLOR.PRIMARY,
      alignItems: 'center',
      marginBottom:2
    },
    imageLogo: {
      width: 40,
      height: 40,
    },
    leftHeader: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
     
    },
    rightHeader: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
     
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
    line:{
      width:'100%',
      backgroundColor: constants.COLOR.BLACK,
    },

    /*Body*/
    body: {
        flex: 12,
        backgroundColor: constants.COLOR.GREY,
        
    },
    groupBody: {
        marginLeft: 24,
    },
    textAll: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 22,
        color: constants.COLOR.WHITE,
        marginStart: 10
    },
    btnAll: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    //  footers

});
export default StyleManagerCategories;
