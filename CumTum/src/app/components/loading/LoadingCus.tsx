import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {ILoading} from '../types';
import {constants} from '../../shared/constants';

const LoadingCus = (props: ILoading) => {
  const {isLoading} = props;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={constants.COLOR.WHITE}
          animating={isLoading}
        />
      ) : null}
    </View>
  );
};

export default LoadingCus;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // backgroundColor: constants.COLOR.RED,
    width: '100%',
    paddingHorizontal: 20,
  },
});
