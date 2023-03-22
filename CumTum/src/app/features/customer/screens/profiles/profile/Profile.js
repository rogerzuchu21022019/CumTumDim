import {View, Text, Button,TextInput} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {useDispatch} from 'react-redux';
import {fetchSignOut} from '../../../../admin/apiAdmin';
import Router from '../../../../../navigation/Router';
import styles from './StylesProfile';
import FastImage from 'react-native-fast-image';
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
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.profile}>
           <Text style={styles.textProfile}>Hồ sơ</Text>

        </View>
        <View style={styles.groupHeader}>
          <View><Text style={styles.tvEdit}>Edit</Text></View>
          <View><Text style={styles.tvEdit}>Signout</Text></View>

        </View>
        </View>
        <View style={styles.body}>
            <View style={styles.viewImage}>
              <FastImage style={styles.imageProfile} source={require("../../../../../../assets/iconLogo.png")}/>
            </View>
            <View style={styles.groupAll}>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>SDT</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>sdasd</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>SDT</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>sdasd</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>SDT</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>sdasd</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>SDT</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>sdasd</TextInput>
              </View>
            </View>
            </View>
         
        </View>

        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeKeyComponent>
  );
};

export default Profile;
