const { StyleSheet } = require("react-native");

const stylesOTP = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#373232',
    },

    /*Header*/
    header: {
        flex: 4,
        //backgroundColor: 'green',
    },
    Logo: {
        flex: 1,
        top: 50,
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
    },
    /*Header*/

    /*Body*/
    body: {
        flex: 6,
        //backgroundColor: 'red',    
    },
    itemOtp: {
        width: '100%',
        height: 97,
        gap: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    itemOtp1: {
        // backgroundColor: 'black',
    },
    itemSend1: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'center',
    },
    itemOtp2: {
        //backgroundColor: 'red',
    },
    itemSend2: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
    itemSend3: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
    itemOtp3: {
        top: 15,
        //backgroundColor: 'pink',
    },
    itemBorder: {
        top: 20,
        flexDirection: 'row',
        width: '100%',
        height: 72,
        justifyContent: 'space-around',
    },
    itemBorder1: {
       padding: 5,
        width: 63,
        height: 63,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        borderWidth: 3.5,
        borderColor: '#FE724C',
    },
    itemcircle: {
        fontSize: 30,
        textAlign: 'center',
    },
    itemTimeSend: {
        top: 70,
        alignItems: 'center',
    },
    itemTimeSend1: {
        color: 'white',
        fontSize: 16,
    },
    itemTimeSend2: {
        top: 25,
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
    },
    buttonAccepct: {
        width: 170,
        height: 59,
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        borderRadius: 35,
        left: 120,
        top: 130,
    },
    buttonConfirm: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
    },
    /*Body*/
});
export default stylesOTP;