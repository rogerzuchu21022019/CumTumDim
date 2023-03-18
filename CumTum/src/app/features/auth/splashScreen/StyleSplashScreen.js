const { StyleSheet, YellowBox } = require("react-native");

const styleSplashScreen = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#373232"
  },

  /*Header*/
  header: {
    flex: 1,
  },
  body: {
    flex: 8,
    alignContent: "center",
    justifyContent: "center"

  },
  imageBody: {
    height: 380,
    width: 414,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*Header*/
  footers: {
    flex: 1
  }
  /*Body*/

})
export default styleSplashScreen