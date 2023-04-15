import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {useDispatch} from 'react-redux';
import {fetchSignOut} from '../../../../admin/apiUser';
import Router from '../../../../../navigation/Router';
import styles from './StylesProfile';
import FastImage from 'react-native-fast-image';
import socketServices from '../../../../../shared/utils/Socket';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };
  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
    socketServices.socket.disconnect();
  };
  const moveToEdit = async () => {
    navigation.navigate(Router.EDIT_PROFILE);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Text style={styles.textProfile}>Hồ sơ</Text>
          </View>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moveToEdit}>
              <View>
                <FastImage
                  style={styles.iconHeader}
                  source={require('../../../../../../assets/iconEdit.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <FastImage
                  style={styles.iconHeader}
                  source={require('../../../../../../assets/iconSignOut.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.viewFinal}>
            <View style={styles.viewImage}>
              <FastImage
                style={styles.imageProfile}
                source={require('../../../../../../assets/Logo_CumTumDim.png')}
              />
            </View>
            <View style={styles.viewTextName}>
              <Text style={styles.textProfile}>Phước</Text>
            </View>
          </View>

          <View style={styles.groupAll}>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số điện thoại</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>0342128462</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Phường</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>Trung Mỹ Tây</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Đường</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>Tô Ký</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số nhà</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>413</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Profile;
