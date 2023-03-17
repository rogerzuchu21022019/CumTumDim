import {Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent'
import styles from './StylesDetailCard'

const DetailCard = () => {
  return (
    <SafeKeyComponent>
        <View  style={styles.container}>
            <View style={styles.header}>
                <View style={styles.groupItemHeader}>
                    <Image source={require("../../../../assets/iconLogo.png")}/>
                    <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
                <View style={styles.strikethrough}></View>
               
            </View>
            <View  style={styles.body}>
                <ScrollView>

                    <View style={styles.itemFinal}>
                        <View style={styles.itemTitle}><Text style={styles.nameTitle}>Mon chinh</Text></View>

                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.Line}></View>

                    

                    </View>
                    <View style={styles.itemFinal}>
                        <View style={styles.itemTitle}><Text style={styles.nameTitle}>Mon chinh</Text></View>

                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.Line}></View>

                    

                    </View>
                    <View style={styles.itemFinal}>
                        <View style={styles.itemTitle}><Text style={styles.nameTitle}>Mon chinh</Text></View>

                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                            </View>
                             

                            
                        </View>
                        
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                            
                        </View>
                        <View style={styles.itemEat}>
                            <View style={styles.itemNumber}>
                                <Text style={styles.numberItem}>1</Text>
                            </View>
                            <View style={styles.itemImg}>
                                <Image source={require('../../../../assets/iconLogo.png')}/>
                            </View>
                            <View style={styles.groupItem}>
                                <View>
                                <Text style={styles.itemName}>Suon bi</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemPrice}>50k</Text>

                                </View  >
                                
                            </View>
                            <View style={styles.itemQuantity}>
                                <Image source={require('../../../../assets/iconPlus.png')}/>
                                <Text style={styles.numberItem}>01</Text>
                                <Image source={require('../../../../assets/iconHyphen.png')}/>

                                
                            </View>
                           

                            
                        </View>
                        <View style={styles.Line}></View>
                    

                    </View>
                    <View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}> Số nhà : 54</Text>
                        </View> 
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Phường : 14</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Đường : Đông Hưng Thuận</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Quận : 12</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Thành Phố : Hồ Chí Minh</Text>
                        </View>
                        <View style={styles.Line}></View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}> Giờ : 13h45p</Text>
                        </View> 
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>SĐT : 0866704364</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Tổng số lượng món ăn : 4</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Tổng số lượng món ăn thêm : 3</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Tổng số lượng topping : 2</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Tổng số lượng Khác : 2</Text>
                        </View>
                        <View style={styles.itemAddress}>
                            <Text style={styles.textAddress}>Tổng tiền : 133k</Text>
                        </View>

                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                         <View style={styles.itemBtn}> 
                            <Text style={styles.textAddress}> Xác nhận</Text>
                        </View>
                    </View>
                       
                  
                   
                    
                    
                    
                </ScrollView>
            </View>
          
        </View>
    </SafeKeyComponent>
  )
}

export default DetailCard

