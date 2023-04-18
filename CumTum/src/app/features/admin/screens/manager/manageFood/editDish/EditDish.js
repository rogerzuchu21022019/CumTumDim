import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleEditEat';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
import {useDispatch, useSelector} from 'react-redux';
import {productSelector} from '../../../../../product/sliceProduct';
import {fetchDishes} from '../../../../../product/apiProduct';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ItemEditDish from './item/ItemEditDish';
import DropdownCus from '../../../../../../components/dropdown/DropdownCus';

const EditDish = ({navigation}) => {
  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const [showHideMainDishesSuon, setShowHideMainDishesSuon] = useState(false);
  const [showHideMainDishesSuonMo, setShowHideMainDishesSuonMo] =
    useState(false);
  const [showHideExtraDishes, setShowHideExtraDishes] = useState(false);
  const [showHideToppings, setShowHideToppings] = useState(false);
  const [showHideAnother, setShowHideAnother] = useState(false);

  const dispatch = useDispatch();

  const productSelect = useSelector(productSelector);

  const mainDishesSuon = productSelect.dishes.filter(item => {
    return item.subCategory === 'Sườn';
  });

  const mainDishesSuonMo = productSelect.dishes.filter(item => {
    return item.subCategory === 'Sườn mỡ';
  });

  const dataExtraList = productSelect.categories.filter(
    item => item.name === 'Món ăn thêm',
  );

  const extraDishes = productSelect.dishes.filter(item => {
    return item.categoryId === dataExtraList[0]._id;
  });

  const dataToppingList = productSelect.categories.filter(
    item => item.name === 'Toppings',
  );

  const toppingsDishes = productSelect.dishes.filter(item => {
    return item.categoryId === dataToppingList[0]._id;
  });

  const dataAnotherList = productSelect.categories.filter(
    item => item.name === 'Khác',
  );

  const anotherDishes = productSelect.dishes.filter(item => {
    return item.categoryId === dataAnotherList[0]._id;
  });

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(fetchDishes());

    return () => {};
  }, [dispatch]);

  const handleShowHide = (name, setName) => {
    setName(!name);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/iconLogo_CumTumDim.jpg')}
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
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.boxFlashList}>
            <ScrollView
              removeClippedSubviews={true}
              scrollEnabled={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              decelerationRate={'fast'}>
              {/* Main Dishes Sườn */}

              <DropdownCus
                handleShowHide={() =>
                  handleShowHide(
                    showHideMainDishesSuon,
                    setShowHideMainDishesSuon,
                  )
                }
                title="Món chính (Sườn)"
                showHide={showHideMainDishesSuon}
              />
              {showHideMainDishesSuon ? (
                <FlatList
                  data={mainDishesSuon}
                  scrollEnabled={false}
                  renderItem={({item, index}) => (
                    <ItemEditDish
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : null}

              {/* Main Dishes Sườn Mỡ */}
              <DropdownCus
                handleShowHide={() =>
                  handleShowHide(
                    showHideMainDishesSuonMo,
                    setShowHideMainDishesSuonMo,
                  )
                }
                title="Món chính (Sườn mỡ)"
                showHide={showHideMainDishesSuonMo}
              />
              {showHideMainDishesSuonMo ? (
                <FlatList
                  scrollEnabled={false}
                  data={mainDishesSuonMo}
                  renderItem={({item, index}) => (
                    <ItemEditDish
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : null}

              {/* Extra Dishes */}
              <DropdownCus
                handleShowHide={() =>
                  handleShowHide(showHideExtraDishes, setShowHideExtraDishes)
                }
                title="Món ăn thêm"
                showHide={showHideExtraDishes}
              />
              {showHideExtraDishes ? (
                <FlatList
                  scrollEnabled={false}
                  data={extraDishes}
                  renderItem={({item, index}) => (
                    <ItemEditDish
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : null}

              {/* Toppings Dishes */}
              <DropdownCus
                handleShowHide={() =>
                  handleShowHide(showHideToppings, setShowHideToppings)
                }
                title="Toppings"
                showHide={showHideToppings}
              />
              {showHideToppings ? (
                <FlatList
                  scrollEnabled={false}
                  data={toppingsDishes}
                  renderItem={({item, index}) => (
                    <ItemEditDish
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : null}
              {/* Toppings Dishes */}
              <DropdownCus
                handleShowHide={() =>
                  handleShowHide(showHideAnother, setShowHideAnother)
                }
                title="Khác"
                showHide={showHideAnother}
              />
              {showHideAnother ? (
                <FlatList
                  scrollEnabled={false}
                  data={anotherDishes}
                  renderItem={({item, index}) => (
                    <ItemEditDish
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                />
              ) : null}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default EditDish;
