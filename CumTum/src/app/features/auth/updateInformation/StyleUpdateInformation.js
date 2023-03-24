
import { constants } from "../../../shared/constants";


const { StyleSheet, YellowBox } = require("react-native");

const styleUpdateInformation = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: "#373232"
    },

    /*Header*/
    header: {
        flex: 4,
    },
    imageHeader: {
        width: 190,
        height: 190,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    viewText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    textHello: {
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: '400',
        lineHeight: 24,
        color: constants.COLOR.WHITE,
    },
    text: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: '700',
        lineHeight: 22,
        color: constants.COLOR.WHITE,
        textAlign: "center"
    },

    /* Body */
    body: {
        flex: 4,
    },
    viewBody: {
        flex: 4,
        marginLeft: 24,
        marginTop: 20
    },
    view1: {
        width: 366,
        height: 47,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
    },
    view2: {
        width: 366,
        height: 47,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
    },
    view3: {
        width: 366,
        height: 47,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
    },
    view4: {
        width: 366,
        height: 47,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
    },

    text1: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.WHITE
    },
    text2: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.WHITE
    },
    text3: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.WHITE,
    },
    text4: {
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400',
        color: constants.COLOR.WHITE
    },

    textInput1: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.BLACK,
        marginLeft: 5,
    },
    textInput2: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.BLACK,
        marginLeft: 5,

    },

    textInput3: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.BLACK,
        marginLeft: 5,
    },

    textInput4: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '400',
        color: constants.COLOR.BLACK,
        marginLeft: 5,
    },
    /*Header*/
    /*Body*/


    footers: {
        flex: 1,

    },
    viewBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewBtn1: {
        backgroundColor: 'red',
        width: 180,
        height: 50,
        borderRadius: 30,
        marginTop: 80,
    },
    textBtn: {
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: '700',
        lineHeight: 29,
        color: constants.COLOR.WHITE
    },
    viewTextBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: 'red',
        width: 180,
        height: 50,
        borderRadius: 30,
    }

})
export default styleUpdateInformation