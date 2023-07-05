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
import IconIonicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import * as RootNavigation from '../../../../../../navigation/RootNavigation';
import Router from '../../../../../../navigation/Router';
import {onCamera, onGallery} from '../../../../../../shared/utils/Camera';
import {androidCameraPermission} from '../../../../../../shared/utils/PermissionAndroid';
import {fetchSignOut} from '../../../../apiUser';
import styles from './StylesAddBanner';
import {
  fetchAddDish,
  fetchCategories,
  fetchUploadImage,
} from '../../../../../product/apiProduct';

import {productSelector} from '../../../../../product/sliceProduct';

// Dropdown
import {SelectList} from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
// import {
//   mainDishOptionsData,
//   moneyData,
//   nameAnother,
//   nameDishes,
//   nameExtraDishes,
//   nameToppings,
// } from './DataDishes';
import {constants} from '../../../../../../shared/constants';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import Statistic from '../../../statistic/Statistic';
import DropdownPicker from '../../../../../../shared/utils/DropdownPicker';
import {LOG} from '../../../../../../../../logger.config';
import CheckModal from '../../../../../../shared/utils/CheckModal';
const log = LOG.extend(`ADD_DISH.JS `);

const AddDish = ({navigation}) => {
  const dispatch = useDispatch();
  // Camera states
  const [avatar, setAvatar] = useState('');
  const [isPicked, setIsPicked] = useState(false);

  // Dropdown states
  const [categoryId, setCategoryId] = useState('');
  const [item, setItem] = useState([]);
  const [isIdMainDish, setIsIdMainDish] = useState(false);

  // Dropdown Picker states
//   const [open, setOpen] = useState(false);
//   const [nameValue, setNameValue] = useState([]);

//   const [openPrice, setOpenPrice] = useState(false);
//   const [namePrice, setNamePrice] = useState([]);

//   const [openSubMainDish, setOpenSubMainDish] = useState(false);
//   const [valueSubMainDish, setValueSubMainDish] = useState([]);

//   const [listItem, setListItem] = useState([]);
//   const [listItemPrice, setListItemPrice] = useState(moneyData);
//   const [listSubMainDish, setListSubMainDish] = useState(mainDishOptionsData);

  let data = useSelector(productSelector);
  console.log('🚀 ~ file: AddDish.js:27 ~ AddDish ~ data:', data);



  
  // Xử lý call api
//   useEffect(() => {
//     dispatch(fetchCategories());
//     return () => {};
//   }, [dispatch]);

//   useEffect(() => {
//     setItem(
//       data.categories.map(item => {
//         return {key: item._id, value: item.name};
//       }),
//     );
//     return () => {};
//   }, [data.categories]);

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

  const placeholderPrice = 'Chọn giá tiền';
  const placeholderTypeMeal = 'Chọn loại sườn';
  const placeholderNameDish = 'Chọn tên món ăn';

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

  const urlHardCode = require('../../../../../../../assets/AddImages.png');

  // xử lý  Nút
  const onCreateProduct = async () => {
    if (categoryId === '') {
      Alert.alert(
        `Bạn quên chưa nhập loại món ăn. Hãy thêm đủ các trường nhé !`,
      );
      return;
    }

    const name = nameValue[0];
    const price = namePrice[0];
    const subCategory = valueSubMainDish[0];
    const res = await dispatch(fetchUploadImage(avatar));
    const imageUrl = res.payload.data;
    const dish = {
      name: name,
      price: price,
      imageUrl: imageUrl,
      subCategory: subCategory,
    };
  };

  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
  };

  // xử lý dropdown chọn categories
  const onHandleSelect = async itemId => {
    console.log('🚀 ~ file: AddDish.js:127 ~ onHandleSelect ~ itemId:', itemId);

    const idMainDishes = dataMainList[0]._id;
    const idExtraDishes = dataExtraList[0]._id;
    const idToppings = dataToppingList[0]._id;
    const idAnother = dataAnotherList[0]._id;

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
  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const [items, 
    
    
    
    
    
    
    tItems] = useState();
  return (
    <SafeKeyComponent>
      {/* Set CSS cho full . Bọc view cho tụi nó đầy đủ . */}
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
          </View>
        </View>
        <View style={styles.divideLine}></View>

        <View style={styles.body}>
          <TouchableOpacity onPress={openCamera}>
            <FastImage
              style={{width: 205, height: 205, marginLeft: 105, marginTop: 65}}
              source={avatar ? imageUrlOptions : urlHardCode}
              onLoadEnd={() => {
                FastImage.cacheControl.cacheOnly;
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <View style={styles.footer}>
            <TouchableOpacity onPress={onCreateProduct}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Thêm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Xử lý camera */}
        <View style={styles.divideLine}></View>
        <CheckModal/>
      </View>
    </SafeKeyComponent>
  );
};

export default AddDish;
