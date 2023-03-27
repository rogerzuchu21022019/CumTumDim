import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StylesEditProfile';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../navigation/Router';
import { constants } from '../../../../../shared/constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';



const EditProfile = ({navigation}) => {
  const moToBack =()=>{
    navigation.navigate(Router.PROFILE)
  }
  const moveToEditImage =()=>{
    navigation.navigate(Router.UPLOAD_IMAGE)
  }
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moToBack}>
            <View>
              <IconAntDesign
              name="left"
              color={constants.COLOR.WHITE}
              size={20}/>
            </View>
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Sữa hồ sơ</Text>
            </View>
            <View style={styles.groupHeader}>
            </View>
          </View>
        </View>
        <View style={styles.body}>
        <View style={styles.viewFinal}>
          <TouchableOpacity onPress={moveToEditImage}>
          <View style={styles.viewImage}>
              <FastImage
                style={styles.imageProfile}
                source={require('../../../../../../assets/logo.png')}
              />
            </View>
            <View style={styles.iconCamera}>
              <View 
                    style={styles.iconCameraStyle}
                    >
              <IconEntypo
                    name="camera"
                    color={constants.COLOR.BLACK}
                    size={15}
                  />
              </View>
        
          </View>
            </TouchableOpacity>
        </View>
            
          <View style={styles.groupAll}>
          <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Họ và tên</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>Võ Ngọc Phước</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số điện thoại</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>0342128462</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Phường</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>Trung Mỹ Tây</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Đường</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>Tô Ký</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số nhà</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>413</TextInput>
              </View>
            </View>
          </View>

      
        </View>
        <View style={styles.footer}>

        <View style={styles.btnSave}>
              <Text style={styles.textSave}>Lưu</Text>
            </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default EditProfile;
