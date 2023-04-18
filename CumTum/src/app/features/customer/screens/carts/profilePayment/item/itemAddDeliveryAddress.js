import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from  './stylesItemAddDeliveryAddress'
const itemAddDeliveryAddrees = ({item, navigation, index}) => {
  return (
    <View style={styles.groupAll}>
            <View style={styles.item}>
              <View style={styles.viewTitle1}>
                <Text style={styles.textTitle1}>Thông tin liên hệ</Text>
              </View>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Họ và tên</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>{item.name}</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số điện thoại</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>{item.phone}</TextInput>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.viewTitle1}>
                <Text style={styles.textTitle1}>Địa chỉ giao hàng</Text>
              </View>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Phường</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>{item.ward}</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Đường</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>{item.street}</TextInput>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số nhà</Text>
              </View>
              <View style={styles.viewInput}>
                <TextInput style={styles.textInput}>{item.houseNumber}</TextInput>
              </View>
            </View>
          </View>
  )
}
