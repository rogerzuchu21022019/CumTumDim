const {StyleSheet} = require('react-native');

const stylesLogin = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#373232',
  },
  /*Header*/
  header: {
    flex: 6,
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textHeader: {
    fontWeight: '900',
    fontSize: 22,
    fontStyle: 'normal',
    lineHeight: 39,
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHeader: {
    width: 305,
    height: 294,
    marginTop: 30,
  },

  /*Header*/

  /*Body*/
  body: {
    flex: 4,
    backgroundColor: '#373232',
  },
  viewLoad: {
    flex: 1/3,
    // backgroundColor: 'blue',
    
  },
  imageBody1: {
    width: 167,
    height: 77,
    marginLeft: 100,
    bottom: 5,
  },
  imageBody2: {
    width: 39,
    height: 39,
    marginLeft: 42,
    bottom: 65,
  },
  touchAbleOpacityBody: {
    backgroundColor: 'white',
    width: 262,
    height: 59,
    borderRadius: 30,
  },
  viewbtn: {
    alignItems: 'center',
    marginTop: 90,
  },
  /*Body*/

  footers: {},
});
export default stylesLogin;
