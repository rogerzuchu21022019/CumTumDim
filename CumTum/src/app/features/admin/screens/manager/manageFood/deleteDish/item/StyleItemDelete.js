import {StyleSheet} from 'react-native';
import {constants} from '../../../../../../../shared/constants';

constants;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    // backgroundColor: constants.COLOR.WHITE,
  },
  itemEat: {
    backgroundColor: constants.COLOR.GREY,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '100%',
    flex: 1,
    borderRadius: 10,
    paddingStart: 5,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  itemNumber: {
    paddingLeft: 10,
  },

  numberItem: {
    color: 'white',
  },
  imageEdit: {
    justifyContent: 'center',
    backgroundColor: constants.COLOR.ORANGE,
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  boxText: {
    flex: 1 / 2,
    // backgroundColor: constants.COLOR.BLUE,
  },

  itemName: {
    paddingBottom: 10,
    color: 'white',
  },
  itemPrice: {
    color: '#FE724C',
  },
});

export default styles;
