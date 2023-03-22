import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import * as RootNavigation from '../../../../navigation/RootNavigation';
import Router from '../../../../navigation/Router';
import { onCamera, onGallery } from '../../../../shared/utils/Camera';
import { androidCameraPermission } from '../../../../shared/utils/PermissionAndroid';
import { fetchSignOut } from '../../apiAdmin';
import styleAddDish from './StyleAddDish';
import {
  fetchAddDish,
  fetchCategories,
  fetchUploadImage,
} from '../../../product/apiProduct';

import { productSelector } from '../../../product/sliceProduct';

// Dropdown
import { SelectList } from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  mainDishOptionsData,
  moneyData,
  nameAnother,
  nameDishes,
  nameExtraDishes,
  nameToppings,

} from './DataDishes';
import { constants } from '../../../../shared/constants';
import BoxInputCus from '../../../../components/input/BoxInput';
import Statistic from '../statistic/Statistic';
import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView';

const AddDish = ({ navigation }) => {

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
  const [listItem, setListItem] = useState([]);

  let data = useSelector(productSelector);
  console.log('🚀 ~ file: AddDish.js:27 ~ AddDish ~ data:', data);

  // Xử lý call api
  useEffect(() => {
    dispatch(fetchCategories());
    return () => { };
  }, [dispatch]);

  useEffect(() => {
    setItem(
      data.categories.map(item => {
        return { key: item._id, value: item.name };
      }),
    );
    return () => { };
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
    Alert.alert('Choose an option', '', [
      { text: 'Take a photo', onPress: () => onCamera(setAvatar, setIsPicked) },
      {
        text: 'Go to Gallery',
        onPress: () => onGallery(setAvatar, setIsPicked),
      },
      { text: 'Cancel', onPress: onCancel },
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
    const res = await dispatch(fetchUploadImage(avatar));
    const imageUrl = res.payload.data;
    const name = nameValue[0];

    const dish = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };

    console.log('🚀 ~ file: AddDish.js:127 ~ onCreateProduct ~ data:', dish);
    dispatch(fetchAddDish({ dish: dish, categoryId: categoryId }));
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
    } else {
      console.log(
        '🚀 ~ file: AddDish.js:137 ~ onHandleSelect ~ maindish false',
      );
      if (itemId === idExtraDishes) {
        setListItem(nameExtraDishes);
        setIsIdMainDish(false);
      } else if (itemId === idToppings) {
        setListItem(nameToppings);
        setIsIdMainDish(false);
      } else if (itemId === idAnother) {
        setListItem(nameAnother);
        setIsIdMainDish(false);
      }
    }
  };

  // xử lý dropdown chọn main dish

  const [items, setItems] = useState();
  return (
    <SafeKeyComponent>
      {/* Set CSS cho full . Bọc view cho tụi nó đầy đủ . */}
      <View style={styleAddDish.container}>

        <View style={styleAddDish.header}>
          <View style={styleAddDish.groupFinal}>
            <View style={styleAddDish.groupItemHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={styleAddDish.imageRuturn}
                  source={require('../../../../../assets/return.png')}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.HOME_ADMIN);
                }}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
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
              <Text style={styleAddDish.textTitle}>Cum tứm đim</Text>
            </View>
          </View>
          <View style={styleAddDish.strikethrough}></View>
        </View>

        <View style={styleAddDish.body}>
          {/* Xử lý camera */}
          <TouchableOpacity onPress={openCamera}>
            <FastImage
              style={styleAddDish.falstImage}
              source={avatar ? imageUrlOptions : urlHardCode}
              onLoadEnd={() => {
                FastImage.cacheControl.cacheOnly;
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>

          {/* Dropdown chọn loại categories */}
          <View style={styles.viewDropdown}>
            <SelectList
              setSelected={onHandleSelect}
              data={item}
              save="key"
              defaultOption={categoryId}
              dropdownStyles={{
                backgroundColor: constants.COLOR.WHITE,
              }}
              boxStyles={{
                height: 50,
                borderColor: constants.COLOR.BLACK,
                backgroundColor: constants.COLOR.WHITE,
                alignItems: 'center',
                backgroundColor: constants.COLOR.WHITE
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
          {/* Sau khi đã nhấn đúng main dish thì nó hiện ra. Set CSS cứng kích thước
        cho nó bên dưới thằng dropdown trên. }
        {/*  Dropdown chọn Sườn/sườn mỡ */}
          <View>
            {isIdMainDish ? (
              <View style={styles.viewDropdown}>
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
              </View>
            ) : null}
          </View>

          {/* Dropdown tên món */}
          <View style={styles.viewDropdown}>
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
          </View>

          {/* Dropdown giá */}
          <View style={styles.viewDropdown}>
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
          <View style={styles.footer}>
            <TouchableOpacity onPress={onCreateProduct}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Thêm</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={signOut}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      </View>
    </SafeKeyComponent>
  );
};

export default AddDish;
