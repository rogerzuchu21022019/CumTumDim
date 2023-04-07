import {StyleSheet} from 'react-native';
import {constants} from '../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.COLOR.PRIMARY,
    alignItems: 'center',
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
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: constants.COLOR.WHITE,
    marginRight: 20,
  },
  divideLine: {
    height: 2,
    backgroundColor: constants.COLOR.BLACK,
  },
  textTitle: {
    color: 'white',
    marginLeft: 6,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageReturn: {
    // backgroundColor: constants.COLOR.WHITE,
    marginLeft: 5,
    marginRight: 5,
  },
  mainHeader: {
    flexDirection: 'row',
    // backgroundColor: constants.COLOR.WHITE,
    alignItems: 'center',
  },
  //header

  //body
  body: {
    flex: 12,
    backgroundColor: '#252121',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  image:{
    width:40,
    height:40,
    borderRadius:18,
  },
  viewImage:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:30
  },
  
  itemText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginStart: 20
  },
  itemSupport:{
    marginBottom:50,
  },
  viewButtonCreate: {
    backgroundColor: constants.COLOR.YELLOW,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 150,
    height: 50,
  },
  groupBTN:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  btnCreate: {
    // backgroundColor: constants.COLOR.RED,
    fontWeight: '700',
    fontSize: 20,
    color: constants.COLOR.WHITE,
  },
  cartToon:{
   width:"100%"
  },
  imageCartToon:{
    width:130,
    height:130,
  },
  imageCartToonTop:{
    width:"100%",
    alignItems: "flex-end",
  },
  imageCartToonHead:{
    width:160,
    height:160,
  },
    //body
});

export default styles;
