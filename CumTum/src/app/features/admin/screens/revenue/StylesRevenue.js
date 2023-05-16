import { StyleSheet } from 'react-native';
import { constants } from '../../../../shared/constants';

const StylesRevenue = StyleSheet.create({

    container: {
        flex: 10,
    },
    // header
    header: {
        flex: 1,
        backgroundColor: constants.COLOR.PRIMARY,
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
        color: constants.COLOR.WHITE,
        fontWeight: '700',
    },
    groupFinal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //header

    /*body */
    body: {
        flex: 9,
        backgroundColor: constants.COLOR.GREY,
        alignItems: 'center',
    },
    tabsIncome: {
        width: "100%",
        top: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    tabDoanhThu: {
        width: 197,
        height: 50,
        backgroundColor: constants.COLOR.DARK_BROWN,
    },
    tab1: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTab: {
        color: constants.COLOR.WHITE,
        fontWeight: '700',
    },
    tabBieuDo: {
        width: 191,
        height: 50,
        backgroundColor: constants.COLOR.DARK_BROWN,
    },
    tab2: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyTabRevenue: {
        top: 30,
        width: '100%',
    },
    dateRangePickerText: {
        top: 10,
        flexDirection: 'row',
        gap: 10,
        marginLeft: 12,
        color: constants.COLOR.WHITE,
        fontWeight: '500',
    },
    dateRangePickerText1: {
        width: 100,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 9,
        borderWidth: 1,
        backgroundColor: constants.COLOR.DARK_BROWN,
    },
    dateRangePickerText3: {
        backgroundColor: constants.COLOR.DARK_BROWN,
        width: 200,
        height: 40,
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 9,
        borderWidth: 1,
    },
    dateRangePickerText2: {
        color: constants.COLOR.WHITE,
        fontWeight: '500',
        textAlign: 'center',
        top: 8,
    },
    dateRangePickerText4: {
        top: 10,
        marginLeft: 12,
        color: constants.COLOR.WHITE,
        fontWeight: '500',
    },
    datePickerContainer: {
        height: 200,
        top: 100,
        alignItems: 'center',
        alignSelf: 'center',
        gap: 25,
        fontSize: 20,
        mariginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 1,
    },
    buttonTouch: {
        width: 310,
        top: 110,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: constants.COLOR.ORANGE,
        borderRadius: 10,
        borderWidth: 1,
    },
    itemTabDoanhThu: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dateText: {
        color: constants.COLOR.WHITE,
        fontWeight: '700',
    },
    itemTabDate: {
        flexDirection: 'row',
    },
    TextDoanhThu: {
        color: constants.COLOR.WHITE,
        fontWeight: '700',
    },
    bodyTabBieuDo: {
        backgroundColor: 'blue',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        color: constants.COLOR.WHITE,
        fontWeight: '400',
        fontSize: 17,
    },
    itemOder: {
        flexDirection: 'row',
        backgroundColor: constants.COLOR.DARK_BROWN,
        width: 360,
        height: 95,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 17,
    },
    itemText1: {
        color: constants.COLOR.ORANGE,
        fontSize: 15,
        marginVertical: 6,
    },

    itemText: {
        color: constants.COLOR.WHITE,
        fontSize: 15,
        marginVertical: 6,
    },
    /*body */
});

export default StylesRevenue;