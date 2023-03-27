import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent'
import styleManager from './StyleManageDish'
import AddDish from '../../addDish/AddDish'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { constants } from '../../../../../shared/constants'
const ManageDish = () => {
  const navigation = useNavigation();
  return (
    <SafeKeyComponent>
      <View style={styleManager.container}>
      <View style={styleManager.header}>
          <View style={styleManager.mainHeader}>
            <View style={styleManager.leftHeader}>
              <FastImage
                style={styleManager.imageLogo}
                source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styleManager.textTitle}>Cum tứm đim</Text>
            </View>
          </View>
        </View>
        <View style={styleManager.body}>
          <View style={styleManager.groupBody}>
            {/* Quản lý loại món ăn */}
            <TouchableOpacity onPress={()=>navigation.navigate('ManagerCategories')} >
              <View style={styleManager.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styleManager.textAll}>Quản lý loại món ăn</Text>
              </View>

            </TouchableOpacity>
            {/* Quản lý món ăn */}
            <TouchableOpacity onPress={()=>navigation.navigate('ManagerFood')}>
              <View style={styleManager.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styleManager.textAll}>Quản lý món ăn</Text>
              </View>

            </TouchableOpacity>


          </View>

        </View>
        <View style={styleManager.footer}></View>
      </View>
    </SafeKeyComponent>
  )
}

export default ManageDish