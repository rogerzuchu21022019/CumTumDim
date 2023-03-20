
import { constants } from '../../../../../shared/constants';

const { StyleSheet } = require('react-native');
const styleAddDish = StyleSheet.create({
    header: {
        
        backgroundColor: '#252121',
        justifyContent: 'flex-end',
    },
    groupItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:10,
        marginLeft:20
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
});
export default styleAddDish;