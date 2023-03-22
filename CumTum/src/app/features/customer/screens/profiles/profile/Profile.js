import {View, Text, Button} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {useDispatch} from 'react-redux';
import {fetchSignOut} from '../../../../admin/apiAdmin';
import Router from '../../../../../navigation/Router';

const Profile = ({navigation}) => {
  
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };
  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
  };
  return (
    <SafeKeyComponent>
      <View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeKeyComponent>
  );
};

export default Profile;
