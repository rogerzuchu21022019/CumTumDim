import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {constants} from '../../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.RED,
  },
  header: {
    flex: 1,
    backgroundColor: constants.COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
  },
  body: {
    flex: 12,
    backgroundColor: constants.COLOR.RED,
  },
  footer: {
    flex: 1,
    backgroundColor: constants.COLOR.GREY,
  },
});
export default styles;
