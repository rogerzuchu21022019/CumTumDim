import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {useListDishQuery} from '../../../../redux/api/dishesApi';
import {
  addDishToWishCartOrUpdate,
  decreaseDishByID,
  productSelector,
  updateAmount,
} from '../../../features/product/sliceProduct';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import {PropsModalSearch} from '../../../components/types';
import {Dish} from '../../../../redux/api/types';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import {constants} from '../../../shared/constants';
import styles from './Style';

const Search = (props: PropsModalSearch) => {
  const {onCancel, onDone} = props;
  const dispatch = useDispatch();
  const productSelect = useSelector(productSelector);
  const {data, isLoading} = useListDishQuery(); // <- use RTK Query

  const [search, setSearch] = useState('');
  const [newList, setNewList] = useState<Dish[]>([]);

  useEffect(() => {
    const filteredList = filterDishes(productSelect, search);
    setNewList(filteredList);
  }, [productSelect, search]);

  const filterDishes = (productSelect: any, search: string): Dish[] => {
    let allDishes = [
      ...productSelect.mainDishes,
      ...productSelect.extraDishes,
      ...productSelect.toppings,
      ...productSelect.another,
    ];

    if (search.length > 0) {
      allDishes = allDishes.filter((dish: Dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return allDishes;
  };

  const handleAddDish = (dish: Dish) => {
    dispatch(addDishToWishCartOrUpdate(dish));
    dispatch(updateAmount(dish));
  };

  const handleRemoveDish = (dish: Dish) => {
    dispatch(decreaseDishByID(dish));
    dispatch(updateAmount(dish));
  };

  const resetSearch = () => {
    setSearch('');
  };

  const beginFilter = (text: string) => {
    setSearch(text);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <Image
          source={{uri: constants.IMAGE_BG.URI}}
          style={StyleSheet.absoluteFillObject}
          blurRadius={20}
        />
        <View style={styles.header}>
          <View style={styles.boxSearch}>
            <TouchableOpacity style={styles.boxIconBack} onPress={onCancel}>
              <IconAnt name="left" color={constants.COLOR.WHITE} size={18} />
            </TouchableOpacity>
            <View style={styles.boxInput}>
              <IconAnt name="search1" size={20} style={styles.iconMargin} />
              <TextInput
                onChangeText={beginFilter}
                placeholder="Tìm kiếm"
                placeholderTextColor="gray"
                style={styles.inputStyle}
                value={search}
              />
              {search.length > 0 && (
                <TouchableOpacity style={styles.boxClear} onPress={resetSearch}>
                  <IconAnt name="close" size={16} style={styles.iconMargin} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.boxDone}>
              <TouchableOpacity onPress={onDone}>
                <Text style={styles.textWhite}>Giỏ hàng</Text>
              </TouchableOpacity>
              {search && (
                <TouchableOpacity style={styles.btnFind}>
                  <Text style={styles.textWhite}>Tìm kiếm</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.body}>
              <View style={styles.boxFlashList}>
                <Image
                  source={{uri: constants.IMAGE_BG.URI}}
                  style={StyleSheet.absoluteFillObject}
                  blurRadius={20}
                />
                <FlashList
                  data={newList}
                  renderItem={({item, index}) => (
                    <ItemView
                      item={item}
                      index={index}
                      handleAddDish={handleAddDish}
                      handleRemoveDish={handleRemoveDish}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  estimatedItemSize={100}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Search;
