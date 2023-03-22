import { constants } from '../../../../shared/constants';



const { StyleSheet } = require('react-native');
const styleAddDish = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#252121',
    },

    // header
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    groupItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginLeft: 20
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
    imageRuturn: {
        marginLeft: 5
    },
    image: {
        marginLeft: 15
    },

    // body
    body: {
        flex: 7,
    },
    falstImage: {
        width: 205,
        height: 205,
        marginLeft: 105,
        marginTop: 15
    },
    viewTypeOfDish: {
        marginTop: 20,
        marginLeft: 24,
        marginRight: 10,

    },
    nameDish: {
        marginLeft: 24,
        marginRight: 10,
    },
    viewPrice: {
        marginLeft: 24,
        marginRight: 10,
    },

    // footer

    footer: {
        flex: 2,
    },
    btnViewAdd: {
        backgroundColor: 
        constants.COLOR.YELLOW,
        height: 40,
        width:150,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center'
    },
    textAdd: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 28,
        color: constants.COLOR.WHITE,
        textAlign: 'center'
    },
    viewBtnAdd:{
        alignItems:'center'
    },
    btnViewSignOut: {
        backgroundColor: constants.COLOR.YELLOW,
        height: 40,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center'
    },
    textSignOut: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 28,
        color: constants.COLOR.WHITE,
        textAlign: 'center'
    },
});
export default styleAddDish;