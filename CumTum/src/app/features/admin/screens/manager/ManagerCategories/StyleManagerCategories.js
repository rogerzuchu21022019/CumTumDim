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
        backgroundColor: '#252121',
        justifyContent: 'flex-end',
    },
    groupItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-evenly',
        marginLeft:10
    },
    strikethrough: {
        height: 2,
        backgroundColor: 'black',
        marginTop: 10,
    },
    textTitle: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700',
        fontSize: 17, lineHeight: 22
    },
    groupFinal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageRuturn:{
        marginLeft:5
    },
    image:{
        marginLeft:15
    },
    /*Body*/
    body: {
        flex: 10,
    },
    groupBody: {
        marginLeft: 24,
    },
    textAll: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 22,
        color: constants.COLOR.WHITE,
        marginStart:10
    },
    btnAll: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:30
    },
    //  footers

});
export default StyleManagerCategories;
