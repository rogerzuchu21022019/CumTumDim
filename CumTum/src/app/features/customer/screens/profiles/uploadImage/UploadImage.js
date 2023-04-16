import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from'./StylesUploadImage'
import FastImage from 'react-native-fast-image'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Router from '../../../../../navigation/Router';
import { constants } from '../../../../../shared/constants';



const UploadImage = ({navigation}) => {
  const moToBack =()=>{
    navigation.navigate(Router.EDIT_PROFILE)
  }
  return (
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
              <Text style={styles.textProfile}>Chỉnh Sửa ảnh</Text>
            </View>
            <View style={styles.groupHeader}>
            </View>
          </View>
        </View>
      <View style={styles.body}>
    
          
            <View style={styles.viewImage}>
              <FastImage style={styles.itemImage} source={require("../../../../../../assets/logo.png")}/>
            </View>
            
      
        
        <View style={styles.groupAll}>
            <View style={styles.item}>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>Chọn ảnh từ thư viện</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>Chụp ảnh mới</Text>
              </View>
            </View>
            
          </View>
          <View style={styles.btnSave}>
              <Text style={styles.textSave}>Lưu</Text>
            </View>

      </View>
     
    </View>
  )
}

export default UploadImage
