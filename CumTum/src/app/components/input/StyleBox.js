const {StyleSheet} = require('react-native');

const styleBox = StyleSheet.create({
  box: {
    marginTop: 5,
  },

  container: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 6,
    paddingLeft: 10,
    height: 52,
  },
  title: {},
  input: {
    width: '100%',
    marginLeft: 10,
  },
  image: {
    width: 16,
    height: 16,
  },
  image2: {
    width: 16,
    height: 16,
  },
});

export default styleBox;
