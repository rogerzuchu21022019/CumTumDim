import {StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleEditEat';
import ItemEditEat from './ItemEditEat';

const DATA = [
    {
      id: '1',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),

    },
    {
      id: '2',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '3',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '4',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '5',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '6',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '7',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '8',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),    },
    {
      id: '9',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '10',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '11',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '12',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '13',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '14',
      number:'1',
      uri :'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name:'Suon bi',
      price:'5k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
  
  ];
const EditDish = ({navigation}) => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupFinal}>
            <View style={styles.groupItemHeader}>
              <Image
                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <View>
              <Image source={require('../../../../../assets/iconBell.jpg')} />
            </View>
          </View>
          <View style={styles.strikethrough}></View>
        </View>
        <View style={styles.body}>
          <View>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <ItemEditEat item={item} navigation={navigation} />
              )}
              keyExtractor={(item)=>item.id}
              estimatedItemSize={10}
              />
           </View>
           
          </View>
        </View>
      
    </SafeKeyComponent>
  );
};

export default EditDish;
