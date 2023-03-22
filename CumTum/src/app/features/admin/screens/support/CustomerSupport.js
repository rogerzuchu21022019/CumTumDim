import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import StyleCustomerSupport from './StyleCustomerSupport'
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent'

const CustomerSupport = () => {
    return (
        <SafeKeyComponent>
            <View style={StyleCustomerSupport.container}>
                <View style={StyleCustomerSupport.header}>
                    <View style={StyleCustomerSupport.groupFinal}>
                        <View style={StyleCustomerSupport.groupItemHeader}>
                            <Image
                                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
                            />
                            <Text style={StyleCustomerSupport.textTitle}>Cum tứm đim</Text>
                        </View>
                    </View>
                    <View style={StyleCustomerSupport.strikethrough}></View>
                </View>
                <View style={StyleCustomerSupport.body}>
                    <View style={StyleCustomerSupport.itemSupport}>
                        <View style={StyleCustomerSupport.itemSupport1}>
                            <View style={StyleCustomerSupport.image}>
                                <Image source={require('../../../../../assets/ZaloImages.png')} />
                            </View>
                            <View style={StyleCustomerSupport.image}>
                                <Image source={require('../../../../../assets/GmailImages.png')} />
                            </View>
                            <View style={StyleCustomerSupport.image}>
                                <Image source={require('../../../../../assets/PhonesImages.png')} />
                            </View>
                        </View>
                        <View style={StyleCustomerSupport.itemSupport2}>
                            <View>
                                <Text style={StyleCustomerSupport.itemText}>0879175310</Text>
                            </View>
                            <View>
                                <Text style={StyleCustomerSupport.itemText}>vuthanhnam21022019@gmail.com</Text>
                            </View>
                            <View>
                                <Text style={StyleCustomerSupport.itemText}>0879175310</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeKeyComponent>
    )
}

export default CustomerSupport