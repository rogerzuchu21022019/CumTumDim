import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {constants} from '../../../../../shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR.BLACK,
  },
  // header:
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  profile: {},
  groupHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 20,
    paddingStart: 20,
  },
  tvEdit: {
    color: constants.COLOR.WHITE,
    fontSize: 15,
  },
  textProfile: {
    color: constants.COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  // header:

  //body
  body: {
    flex: 8,
    backgroundColor: constants.COLOR.GREY,
    alignItems: 'center',
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textTitle: {
    color: constants.COLOR.WHITE,
    fontSize: 18,
  },
  textInput: {
    marginStart: 20,
    fontSize: 16,
  },
  viewTitle: {
    marginBottom: 5,
  },
  viewInput: {
    backgroundColor: constants.COLOR.WHITE,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  groupAll: {
    width: '100%',
    // backgroundColor: constants.COLOR.RED,
    flex: 1,
  },
  item: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  viewImage: {
    backgroundColor: constants.COLOR.WHITE,
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
  },
  viewFinal: {
    bottom: 40,
  },
  viewTextName: {
    marginTop: 20,
    alignItems: 'center',
  },
  // body
});
export default styles;
