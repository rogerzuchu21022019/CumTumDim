import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import styles from'./StylesUploadImage'
import FastImage from 'react-native-fast-image'


const UploadImage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Text style={styles.textProfile}>Sữa hồ sơ</Text>
          </View>
        </View>
      <View style={styles.body}>
    
          
            <View style={styles.viewImage}>
              <FastImage style={styles.itemImage} source={require("../../../../../../assets/logo.png")}/>
            </View>
            
      
        
        <View style={styles.groupAll}>
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
                <Text style={styles.textTitle}>Số điện thoại</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>0342128462</TextInput>
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
