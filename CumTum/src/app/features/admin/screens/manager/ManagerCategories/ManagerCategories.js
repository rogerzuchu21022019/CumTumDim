import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleManagerCategories from './StyleManagerCategories'
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent'
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { constants } from '../../../../../shared/constants';
const ManagerCategories = () => {
    const navigation = useNavigation();
    return (

        <SafeKeyComponent>
            <View style={StyleManagerCategories.container}>
                <View style={StyleManagerCategories.header}>
                    <View style={StyleManagerCategories.mainHeader}>
                        <View style={StyleManagerCategories.leftHeader}>
                            <FastImage
                                style={StyleManagerCategories.imageLogo}
                                source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                            />
                            <Text style={StyleManagerCategories.textTitle}>Cum tứm đim</Text>
                        </View>
                    </View>
                    <View style={StyleManagerCategories.divideLine}></View>
                </View>
                <View style={StyleManagerCategories.body}>
                    <View style={StyleManagerCategories.groupBody}>
                        {/* Thêm loại món ăn */}
                        <TouchableOpacity onPress={() => navigation.navigate('AddDish')}>
                            <View style={StyleManagerCategories.btnAll}>
                                <Image
                                    source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                                />
                                <Text style={StyleManagerCategories.textAll}>Thêm loại món ăn</Text>
                            </View>

                        </TouchableOpacity >
                        {/* Sửa loại món ăn */}
                        <TouchableOpacity onPress={() => navigation.navigate('EditDish')}>
                            <View style={StyleManagerCategories.btnAll}>
                                <Image
                                    source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                                />
                                <Text style={StyleManagerCategories.textAll}>Sửa loại món ăn</Text>
                            </View>

                        </TouchableOpacity>
                        {/* xóa loại món ăn */}
                        <TouchableOpacity onPress={() => navigation.navigate('EditDish')}>
                            <View style={StyleManagerCategories.btnAll}>
                                <Image
                                    source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                                />
                                <Text style={StyleManagerCategories.textAll}>Xoa loại món ăn</Text>
                            </View>

                        </TouchableOpacity>


                    </View>

                </View>
                <View style={StyleManagerCategories.footer}></View>
            </View>
        </SafeKeyComponent>
    )
}

export default ManagerCategories