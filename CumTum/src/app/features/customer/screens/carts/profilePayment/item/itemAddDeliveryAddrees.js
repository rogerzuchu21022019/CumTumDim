import {View, Text, TextInput, Switch} from 'react-native';
import React, {useState} from 'react';
import styles from './stylesItemAddDeliveryAddrees';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import { constants } from '../../../../../../shared/constants';
const itemAddDeliveryAddrees = ({item, navigation, index}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <SafeKeyComponent>
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

        <View style={styles.viewTitle1}>
          <Text style={styles.textTitle1}>Cài đặt</Text>
        </View> 
      <View style={styles.ViewSwitch}> 
        <View style={styles.ViewSwitchRight}>
        <Text style={styles.textTitle1}>Cài đặt làm địa chỉ mặc định</Text>
        </View>
        <View style={styles.ViewSwitchLeft}>
        <Switch
            trackColor={{false: constants.COLOR.GREY, true: constants.COLOR.WHITE}}
            thumbColor={isEnabled ?  constants.COLOR.ORANGE: constants.COLOR.WHITE}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            
          />
        </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default itemAddDeliveryAddrees;
