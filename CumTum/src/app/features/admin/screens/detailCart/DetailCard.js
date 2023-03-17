import {Text, View,Image,FlatList} from 'react-native'
import React from 'react'
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent'
import styles from './StylesDetailCard'
import {FlashList} from '@shopify/flash-list';
// import { FlatList } from 'react-native/Libraries/Lists/FlatList';


const DATA = [
    {
      id: '1',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '2',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '3',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '4',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '5',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '6',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '7',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '8',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '9',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '10',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '11',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '12',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '13',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
    {
      id: '14',
      title: 'Mon chinh',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      quantity:'1',
    },
  
  ];

const DetailCard = () => {
  return (
    <SafeKeyComponent>
        <View  style={styles.container}>
            <View style={styles.header}>
                <View style={styles.groupItemHeader}>
                    <Image source={require("../../../../assets/iconLogo.png")}/>
                    <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
                <View style={styles.strikethrough}>
                </View>  
            </View>
            <View style={styles.body}>
              <View style={{flex:1}}>
                <FlatList
                data={DATA}
                keyExtractor={(item)=>item.id}
                renderItem={({ item }) => 
                    <View style={styles.itemFinal}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.nameTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.itemEat}>
                        <View style={styles.itemNumber}>
                            <Text style={styles.numberItem}>{item.number}</Text>
                        </View>
                        <View style={styles.itemImg}>
                            <Image style={styles.image} source={{uri:'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg'}}/>
                        </View>
                        <View style={styles.groupItem}>
                            <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantity}>
                            <Text style={styles.numberItem}>{item.quantity}</Text>
                        </View>
                    </View>

                    </View>
                }
                estimatedItemSize={10}
                />
              </View> 
                
            </View>
            
          
        </View>
    </SafeKeyComponent>
  )
}

export default DetailCard

