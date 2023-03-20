import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import * as RootNavigation from '../../../../navigation/RootNavigation';
import Router from '../../../../navigation/Router';
import {onCamera, onGallery} from '../../../../shared/utils/Camera';
import {androidCameraPermission} from '../../../../shared/utils/PermissionAndroid';
import {fetchSignOut} from '../../apiAdmin';
import {
  fetchAddDish,
  fetchCategories,
  fetchUploadImage,
} from '../../../product/apiProduct';
import {productSelector} from '../../../product/sliceProduct';

// Dropdown
import {SelectList} from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  mainDishOptionsData,
  moneyData,
  nameAnother,
  nameDishes,
  nameExtraDishes,
  nameToppings,
} from './DataDishes';
import {constants} from '../../../../shared/constants';
import BoxInputCus from '../../../../components/input/BoxInput';

const AddDish = ({navigation}) => {
  const dispatch = useDispatch();
  // Camera states
  const [avatar, setAvatar] = useState('');
  const [isPicked, setIsPicked] = useState(false);

  // Dropdown states
  const [categoryId, setCategoryId] = useState('');
  const [selected2nd, setSelected2nd] = useState('');
  const [price, setPrice] = useState('');
  const [selected4th, setSelected4th] = useState('');
  const [item, setItem] = useState([]);
  const [isIdMainDish, setIsIdMainDish] = useState(false);
  const [isIdExtraDishes, setIsIdExtraDishes] = useState(false);
  const [isIdToppings, setIsIdToppings] = useState(false);
  const [isIdAnother, setIsIdAnother] = useState(false);

  // Dropdown Picker states
  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState([]);

  const [openPrice, setOpenPrice] = useState(false);
  const [namePrice, setNamePrice] = useState([]);

  const [openSubMainDish, setOpenSubMainDish] = useState(false);
  const [valueSubMainDish, setValueSubMainDish] = useState([]);

  const [listItem, setListItem] = useState([]);
  const [listItemPrice, setListItemPrice] = useState(moneyData);
  const [listSubMainDish, setListSubMainDish] = useState(mainDishOptionsData);

  let data = useSelector(productSelector);
  console.log('🚀 ~ file: AddDish.js:27 ~ AddDish ~ data:', data);

  // Xử lý call api
  useEffect(() => {
    dispatch(fetchCategories());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    setItem(
      data.categories.map(item => {
        return {key: item._id, value: item.name};
      }),
    );
    return () => {};
  }, [data.categories]);

  /* Xử lý camera , show alert, permission */
  const onCancel = async () => {
    Alert.alert('Cancel');
  };

  const openCamera = async () => {
    Platform.OS == 'ios' ? showAlert() : acceptedPermission();
  };

  const acceptedPermission = async () => {
    const permission = await androidCameraPermission();

    if (permission) {
      showAlert();
    }
  };

  const showAlert = () => {
    const optionTitle = 'Choose an option';
    const optionPhoto = 'Take a photo';
    const optionGallery = 'Choose an option';
    const optionCancel = 'Cancel';
    Alert.alert(optionTitle, '', [
      {text: optionPhoto, onPress: () => onCamera(setAvatar, setIsPicked)},
      {
        text: optionGallery,
        onPress: () => onGallery(setAvatar, setIsPicked),
      },
      {text: optionCancel, onPress: onCancel},
    ]);
  };

  // xử lý options FastImage
  const imageUrlOptions = {
    uri: avatar,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  const urlHardCode = require('../../../../../assets/AddImages.png');

  // xử lý  Nút
  const onCreateProduct = async () => {
    if (categoryId === '') {
      Alert.alert(`Bạn quên chưa nhập loại món ăn. Hãy thêm đủ các trường nhé !`);
      return;
    }

    if (!namePrice || namePrice.length === 0) {
      Alert.alert(`Bạn quên chưa nhập giá của món ăn. Hãy thêm đủ các trường nhé !`);
      return;
    }
    
    if (!nameValue || nameValue.length === 0) {
      Alert.alert(`Bạn quên chưa nhập tên món ăn. Hãy thêm đủ các trường nhé !`);
      return;
    }
    if (avatar === '') {
      Alert.alert(`Bạn quên chưa chọn hình ảnh cho món ăn. Hãy thêm đủ các trường nhé !`);
      return;
    }

    const name = nameValue[0];
    const price = namePrice[0];
    const subCategory = valueSubMainDish[0];
    if (categoryId===data.categories[3]._id && !subCategory) {
      Alert.alert(`Bạn quên chưa nhập loại sườn. Hãy thêm đủ các trường nhé !`);
      return;
    }
    const res = await dispatch(fetchUploadImage(avatar));
    const imageUrl = res.payload.data;
    const dish = {
      name: name,
      price: price,
      imageUrl: imageUrl,
      subCategory: subCategory,
    };

    console.log('🚀 ~ file: AddDish.js:127 ~ onCreateProduct ~ data:', dish);
    dispatch(fetchAddDish({dish: dish, categoryId: categoryId}));
  };

  const signOut = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };

  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
  };

  // xử lý dropdown chọn categories
  const onHandleSelect = async itemId => {
    console.log('🚀 ~ file: AddDish.js:127 ~ onHandleSelect ~ itemId:', itemId);
    const idMainDishes = '64110dac70044fadf9e61acc';
    const idExtraDishes = '64110a0284f37debf359d572';
    const idToppings = '64110a1184f37debf359d574';
    const idAnother = '64110a2084f37debf359d576';
    setCategoryId(itemId);

    if (itemId === idMainDishes) {
      console.log('🚀 ~ file: AddDish.js:137 ~ onHandleSelect ~ maindish true');
      setIsIdMainDish(true);
      setListItem(nameDishes);
      setNameValue(null);
      setNamePrice(null);
    } else {
      console.log(
        '🚀 ~ file: AddDish.js:137 ~ onHandleSelect ~ maindish false',
      );
      if (itemId === idExtraDishes) {
        setListItem(nameExtraDishes);
        setNameValue(null);
        setNamePrice(null);
        setIsIdMainDish(false);
      } else if (itemId === idToppings) {
        setListItem(nameToppings);
        setIsIdMainDish(false);
        setNameValue(null);
        setNamePrice(null);
      } else if (itemId === idAnother) {
        setListItem(nameAnother);
        setIsIdMainDish(false);
        setNameValue(null);
        setNamePrice(null);
      }
    }
  };

  // xử lý dropdown chọn main dish

  const [items, setItems] = useState();
  return (
    <SafeKeyComponent>
      {/* Set CSS cho full . Bọc view cho tụi nó đầy đủ . */}
      <View>
        {/* Xử lý camera */}
        <TouchableOpacity onPress={openCamera}>
          <FastImage
            style={{width: 300, height: 300}}
            source={avatar ? imageUrlOptions : urlHardCode}
            onLoadEnd={() => {
              FastImage.cacheControl.cacheOnly;
            }}
            resizeMode={FastImage.resizeMode.contain}
          />

          {/* <FastImage
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://unsplash.it/400/400?image=1',
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          /> */}
        </TouchableOpacity>

        {/* Dropdown chọn loại categories */}
        <View>
          <SelectList
            setSelected={onHandleSelect}
            data={item}
            save="key"
            defaultOption={categoryId}
            boxStyles={{
              height: 50,
              borderColor: constants.COLOR.BLACK,
              alignItems: 'center',
            }}
            placeholder="Chọn loại món"
            arrowicon={
              <SimpleLineIcons
                name="arrow-down"
                style={{
                  marginRight: 4,
                }}
                size={10}
              />
            }
          />
        </View>

        <Text>{categoryId}</Text>

        {/* Sau khi đã nhấn đúng main dish thì nó hiện ra. Set CSS cứng kích thước
        cho nó bên dưới thằng dropdown trên. }
        {/*  Dropdown chọn Sườn/sườn mỡ */}
        <View>
          {isIdMainDish ? (
            <View style={{marginTop: 20}}>
              <DropDownPicker
                open={openSubMainDish}
                value={valueSubMainDish}
                items={mainDishOptionsData}
                setOpen={setOpenSubMainDish}
                setValue={setValueSubMainDish}
                setItems={setListSubMainDish}
                placeholder="Chọn tên món ăn"
                placeholderStyle={{
                  marginLeft: 10,
                  color: constants.COLOR.BLACK,
                }}
                textStyle={{
                  color: constants.COLOR.WHITE,
                }}
                //multi
                multiple={true}
                min={1}
                max={1}
                // result after choose
                mode="BADGE"
                showBadgeDot={true}
                badgeProps={{
                  activeOpacity: 0.5,
                }}
                badgeColors={['red', 'blue', 'orange']}
                badgeDotColors={['yellow', 'grey', 'aqua']}
                //search
                searchable={true}
                searchPlaceholder="Tìm kiếm hoặc chọn lựa tên "
                searchWithRegionalAccents={true}
                searchContainerStyle={{
                  borderBottomColor: '#dfdfdf',
                }}
                searchTextInputStyle={{
                  color: constants.COLOR.WHITE,
                }}
                searchPlaceholderTextColor={constants.COLOR.WHITE}
                customItemLabelStyle={{
                  fontStyle: 'italic',
                }}
                // show type of list item
                listMode="MODAL"
                modalTitle="Select an item"
                closeAfterSelecting={true}
                bottomOffset={100}
                dropDownDirection="AUTO"
                modalContentContainerStyle={{
                  backgroundColor: constants.COLOR.PRIMARY,
                }}
                modalAnimationType="slide"
                //icon
                TickIconComponent={() => (
                  <MaterialIcons
                    name="done"
                    style={{
                      marginRight: 4,
                    }}
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                )}
                arrowIconStyle={{
                  width: 15,
                  height: 15,
                  marginRight: 12,
                }}
              />
              <Text>{valueSubMainDish}</Text>
              {/* <SelectList
                setSelected={setSelected2nd}
                data={mainDishOptionsData}
                save="value"
                placeholder="Chọn loại sườn"
                boxStyles={{
                  height: 50,
                  borderColor: constants.COLOR.BLACK,
                  alignItems: 'center',
                }}
                arrowicon={
                  <SimpleLineIcons
                    name="arrow-down"
                    style={{
                      marginRight: 4,
                    }}
                    size={10}
                  />
                }
              /> */}
            </View>
          ) : null}
        </View>

        {/* Dropdown tên món */}
        <View
          style={{
            marginTop: 20,
          }}>
          <DropDownPicker
            open={open}
            value={nameValue}
            items={listItem}
            setOpen={setOpen}
            setValue={setNameValue}
            setItems={setListItem}
            placeholder="Chọn tên món ăn"
            placeholderStyle={{
              marginLeft: 10,
              color: constants.COLOR.BLACK,
            }}
            textStyle={{
              color: constants.COLOR.WHITE,
            }}
            //multi
            multiple={true}
            min={1}
            max={1}
            // result after choose
            mode="BADGE"
            showBadgeDot={true}
            badgeProps={{
              activeOpacity: 0.5,
            }}
            badgeColors={['red', 'blue', 'orange']}
            badgeDotColors={['yellow', 'grey', 'aqua']}
            //search
            searchable={true}
            searchPlaceholder="Tìm kiếm hoặc chọn lựa tên "
            searchWithRegionalAccents={true}
            searchContainerStyle={{
              borderBottomColor: '#dfdfdf',
            }}
            searchTextInputStyle={{
              color: constants.COLOR.WHITE,
            }}
            searchPlaceholderTextColor={constants.COLOR.WHITE}
            customItemLabelStyle={{
              fontStyle: 'italic',
            }}
            // show type of list item
            listMode="MODAL"
            modalTitle="Select an item"
            closeAfterSelecting={true}
            bottomOffset={100}
            dropDownDirection="AUTO"
            modalContentContainerStyle={{
              backgroundColor: constants.COLOR.PRIMARY,
            }}
            modalAnimationType="slide"
            //icon
            TickIconComponent={() => (
              <MaterialIcons
                name="done"
                style={{
                  marginRight: 4,
                }}
                color={constants.COLOR.WHITE}
                size={20}
              />
            )}
            arrowIconStyle={{
              width: 15,
              height: 15,
              marginRight: 12,
            }}
          />
          <Text>{nameValue}</Text>
        </View>

        {/* Dropdown giá */}
        <View style={{marginTop: 20}}>
          <DropDownPicker
            open={openPrice}
            value={namePrice}
            items={listItemPrice}
            setOpen={setOpenPrice}
            setValue={setNamePrice}
            setItems={setListItemPrice}
            placeholder="Chọn giá tiền"
            placeholderStyle={{
              marginLeft: 10,
              color: constants.COLOR.BLACK,
            }}
            textStyle={{
              color: constants.COLOR.WHITE,
            }}
            //multi
            multiple={true}
            min={1}
            max={1}
            // result after choose
            mode="BADGE"
            showBadgeDot={true}
            badgeProps={{
              activeOpacity: 0.5,
            }}
            badgeColors={['blue', 'orange', 'red']}
            badgeDotColors={['grey', 'aqua', 'yellow']}
            //search
            searchable={true}
            searchPlaceholder="Tìm kiếm hoặc chọn lựa tên "
            searchWithRegionalAccents={true}
            searchContainerStyle={{
              borderBottomColor: '#dfdfdf',
            }}
            searchTextInputStyle={{
              color: constants.COLOR.WHITE,
            }}
            searchPlaceholderTextColor={constants.COLOR.WHITE}
            customItemLabelStyle={{
              fontStyle: 'italic',
            }}
            // show type of list item
            listMode="MODAL"
            modalTitle="Select an item"
            closeAfterSelecting={true}
            bottomOffset={100}
            dropDownDirection="AUTO"
            modalContentContainerStyle={{
              backgroundColor: constants.COLOR.PRIMARY,
            }}
            modalAnimationType="slide"
            //icon
            TickIconComponent={() => (
              <MaterialIcons
                name="done"
                style={{
                  marginRight: 4,
                }}
                color={constants.COLOR.WHITE}
                size={20}
              />
            )}
            arrowIconStyle={{
              width: 15,
              height: 15,
              marginRight: 12,
            }}
          />
        </View>
        <Text>{namePrice}</Text>

        <Button title="Create Product" onPress={onCreateProduct} />
        <Button title="SignOut" onPress={signOut} />
      </View>
    </SafeKeyComponent>
  );
};

export default AddDish;
