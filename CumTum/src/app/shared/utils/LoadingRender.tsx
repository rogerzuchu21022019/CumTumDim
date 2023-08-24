/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, View} from 'react-native';
import {constants} from '../constants';

/* eslint-disable react/jsx-no-undef */
export const renderLoading = () => {
  return (
    <View>
      <ActivityIndicator size={'small'} color={constants.COLOR.WHITE} />
    </View>
  );
};
