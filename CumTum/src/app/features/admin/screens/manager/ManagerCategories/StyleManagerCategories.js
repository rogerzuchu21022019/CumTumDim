import { constants } from '../../../../../shared/constants';

const { StyleSheet } = require('react-native');

const StyleManagerCategories = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373232',
    },
    /*Header*/
    header: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: constants.COLOR.PRIMARY,
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
        marginLeft: 20,
      },
      divideLine: {
        height: 2,
        backgroundColor: constants.COLOR.BLACK,
        // marginTop: 10,
      },
      textTitle: {
        color: 'white',
        marginLeft: 6,
      },
      mainHeader: {
        flexDirection: 'row',
        // backgroundColor: constants.COLOR.WHITE,
        alignItems: 'center',
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
