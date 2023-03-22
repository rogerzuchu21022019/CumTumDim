import { StyleSheet } from 'react-native';

const StyleCustomerSupport = StyleSheet.create({
    container: {
        flex: 10,
    },
    // header
    header: {
        flex: 1,
        backgroundColor: '#252121',
        justifyContent: 'flex-end',
    },
    groupItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingEnd: 220,
    },
    strikethrough: {
        height: 2,
        backgroundColor: 'black',
        marginTop: 10,
    },
    textTitle: {
        color: 'white',
        fontWeight: '700',
    },
    groupFinal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //header

    //body
    body: {
        flex: 9,
        backgroundColor: '#252121',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemSupport: {
        marginBottom: 40,
        flex: 1,
        backgroundColor: '#252121',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemSupport1: {
        gap: 55,
        flexDirection: 'column',
    },
    itemSupport2: {
        gap: 80,
        flexDirection: 'column',
    },
    itemText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    //body
});

export default StyleCustomerSupport;