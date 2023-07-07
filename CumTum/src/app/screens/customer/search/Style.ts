import {StyleSheet} from 'react-native';
import {constants} from '../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR.PRIMARY,
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxDone: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  iconMargin: {
    marginLeft: 10,
  },
  boxInput: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: constants.COLOR.WHITE,
  },

  inputStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    color:constants.COLOR.WHITE
  },
  boxSearch: {
    flexDirection: 'row',
    width: '100%',
  },
  boxIconBack: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
  },

  body: {
    flex: 8,
    // backgroundColor:'red'
  },
  boxFlashList: {
    flex: 1,
  },
  btnFind: {
    justifyContent: 'center',
  },
  boxClear: {
    flexDirection: 'row',
    marginRight: 10,
  },
  footer: {
    flex: 0,
  },
});
export default styles;
