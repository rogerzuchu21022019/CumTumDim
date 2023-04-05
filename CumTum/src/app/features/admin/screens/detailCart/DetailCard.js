import {Text, View,Image,FlatList,TouchableOpacity,ScrollView,TouchableNativeFeedback} from 'react-native'
import React,{useEffect}  from 'react'
import styles from './StylesDetailCard'
import ItemDetail from './ItemDetail';
import { FlashList } from '@shopify/flash-list';
import Router from '../../../../navigation/Router';
import { LOG } from '../../../../../../logger.config';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { constants } from '../../../../shared/constants';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';





const DetailCard = ({route,navigation}) => {
  const log = LOG.extend("DETAILCART")
  const {item,index} = route.params
  log.info("item",item)

  let toppingsCart =[];  
  toppingsCart = item.toppingsCart;
  console.log('====================================');
  console.log("toppingsCart",toppingsCart);
  console.log('====================================');

  toppingsCart.forEach((cart)=>{
    log.info("cart",cart);
  })

  let mainDishCart =[];  
  mainDishCart = item.mainDishCart;
  console.log('====================================');
  console.log("mainDishCart",mainDishCart);
  console.log('====================================');

  toppingsCart.forEach((cart)=>{
    log.info("cart",cart);
  })
  const moveToHOme = ()=>{
    navigation.navigate(Router.HOME_ADMIN)
  }

  
  const solveAmountSuonMo = () => {
    let totalAmountDish = 0;
    item.mainDishCart.forEach(item => {
      if (item.subCategory === 'Sườn mỡ') {
        totalAmountDish += item.amounts;
      }
    });
    return totalAmountDish;
  };
  const solveAmountMainDish = () => {
    let totalAmountDish = 0;
    item.mainDishCart.forEach(item => {
      totalAmountDish += item.amounts;
    });
    return totalAmountDish;
  };


  
  
  
  // item.totalMainDish


  return (
    <SafeKeyComponent>
    {item.mainDishCart.length ||
    item.extraDishCart.length ||
    item.toppingsCart.length ||
    item.anotherCart.length ? (
      <View style={styles.container}>
         <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={moveToHOme}
               >
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={moveToHOme}>
                <View style={styles.viewLogo}>
                  <Image
                    style={styles.imageLogo}
                    source={require("../../../../../assets/Logo_CumTumDim.png")}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView
            // horizontal={true}
            // removeClippedSubviews={true}
            // initialScrollIndex={0}
            scrollEnabled={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            decelerationRate={'fast'}>
            <TouchableNativeFeedback>
              <View style={styles.viewScrollList}>
                {item.mainDishCart.length ? (
                  <View style={styles.viewMainDishes}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Món Chính</Text>
                    </View>
                    <FlashList
                      data={item.mainDishCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemDetail
                            index={index}
                            item={item}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                      key={'list1'}
                    />

                   
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}
                {item.extraDishCart.length ? (
                  <View style={styles.viewExtraDishes}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Món thêm</Text>
                    </View>
                    <FlashList
                      data={item.extraDishCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemDetail
                            index={index}
                            item={item}
                           
                          />
                        );
                      }}
                      key={'list2'}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />
                    
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}

                {item.toppingsCart.length ? (
                  <View style={styles.viewToppings}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Toppings</Text>
                    </View>
                    <FlashList
                      data={item.toppingsCart}
                      renderItem={({item, index}) => {
                      console.log('====================================');
                      console.log("item",item);
                      console.log('====================================');
                        return (
                          <ItemDetail
                            index={index}
                            item={item}
                          />
                          
                        );
                      }}
                      key={'list3'}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />

                   
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}

                {item.anotherCart.length ? (
                  <View style={styles.viewAnother}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Khác</Text>
                    </View>
                    <FlashList
                      data={item.anotherCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemDetail
                            index={index}
                            item={item}
                          
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                      key={'list4'}
                    />
                   
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}
                <View style={styles.viewTotal}>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textAddress}>
                      Số nhà :54
                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textAddress}>
                      Đường :14

                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textAddress}>
                      Phường : Đông Hưng Thuận
                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textAddress}>
                      Quận : 12
                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textAddress}>
                      Thành Phố : Hồ Chí Minh
                    </Text>
                  </View>
                
                  <View style={styles.divideLine}></View>
                
                </View>

                
                <View style={styles.viewTotal}>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món chính:</Text>
                    <Text style={styles.textInfo}>
                      {/* {solveAmountMainDish()}  */}
                      {item.totalMainDish}
                    </Text>
                  </View>
                 

                  <View
                    style={[
                      styles.viewBoxShowInfoBill,
                      styles.viewBoxShowSubInfoBill,
                    ]}>
                    <Text style={[styles.textInfo, styles.updateSubText]}>
                      + Số lượng Suờn mỡ:
                    </Text>
                    <Text style={[styles.textInfo, styles.updateSubText]}>
                      {solveAmountSuonMo()} 
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.viewBoxShowInfoBill,
                      styles.viewBoxShowSubInfoBill,
                    ]}>
                    <Text style={[styles.textInfo, styles.updateSubText]}>
                      + Số lượng Suờn :
                    </Text>
                    <Text style={[styles.textInfo, styles.updateSubText]}>
                      {solveAmountMainDish()-solveAmountSuonMo()}
                    </Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món thêm:</Text>
                    <Text style={styles.textInfo}>
                      {/* {solveAmountExtraDish()} */}
                      {item.totalExtraDish}
                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món topping:</Text>
                    <Text style={styles.textInfo}>
                      {/* {solveAmountToppings()} */}
                      {item.totalTopping}
                    </Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món khác:</Text>
                    <Text style={styles.textInfo}>
                      {/* {solveAmountAnotherDish()} */}
                      {item.totalAnother}
                    </Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Tổng Số lượng:</Text>
                    <Text style={styles.textInfo}>
                      {/* {solveAmountDishes()} */}
                      {item.totalAmount}
                    </Text>
                  </View>
                  <View style={styles.divideLine}></View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={[styles.textInfo, styles.updateTextInfo]}>
                      Tổng Tiền:
                    </Text>
                    <Text style={[styles.textInfo, styles.updateTextInfo]}>
                      {/* {solveMoneyToPaid()} K */}
                      {item.moneyToPaid}

                    </Text>
                  </View>
                </View>
                <View style={styles.groupButton}>
                
                  <TouchableOpacity >
                    <View style={styles.viewButton}>
                      <Text style={styles.textButton}>Xác nhận</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <View style={styles.viewButton}>
                      <Text style={styles.textButton}>Huỷ</Text>
                    </View>
                  </TouchableOpacity>

                </View>
               
              </View>
            </TouchableNativeFeedback>
          </ScrollView>
        </View>

        <View style={styles.footer}></View>
      </View>
    ) : (
      <CartNoItem navigation={navigation} />
    )}
    
  </SafeKeyComponent>
  )
}

export default DetailCard

