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
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import * as RootNavigation from '../../../../navigation/RootNavigation';
import Router from '../../../../navigation/Router';
import {onCamera, onGallery} from '../../../../shared/utils/Camera';
import {androidCameraPermission} from '../../../../shared/utils/PermissionAndroid';
import {fetchSignOut} from '../../../admin/apiAdmin';
import {fetchUploadImage} from '../../apiProduct';
import {productSelector} from '../../sliceProduct';

const AddDish = ({navigation}) => {
  const [avatar, setAvatar] = useState('');
  const [isPicked, setIsPicked] = useState(false);
  const dispatch = useDispatch();

  let data = useSelector(productSelector);
  console.log('🚀 ~ file: AddDish.js:27 ~ AddDish ~ data:', data);

  // useEffect(() => {
  //   if (!data.user) {
  //     moveTo();
  //   }
  //   return () => {};
  // }, [data]);

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
      {text: 'Take a photo', onPress: () => onCamera(setAvatar, setIsPicked)},
      {
        text: 'Go to Gallery',
        onPress: () => onGallery(setAvatar, setIsPicked),
      },
      {text: 'Cancel', onPress: onCancel},
    ]);
  };

  const imageUrlOptions = {
    uri: avatar,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  const urlHardCode = require('../../../../../assets/AddImages.png');

  const onCreateProduct = async () => {
    dispatch(fetchUploadImage(avatar));
  };

  const signOut = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };

  const moveTo = async () => {
    console.log(`return`);
    navigation.navigate(Router.LOGIN);
  };
  return (
    <SafeKeyComponent>
      <View>
        <TouchableOpacity onPress={openCamera}>
          <FastImage
            style={{width: 300, height: 300}}
            source={avatar ? imageUrlOptions : urlHardCode}
            onLoadEnd={() => {
              FastImage.cacheControl.cacheOnly;
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <Button title="Create Product" onPress={onCreateProduct} />
        <Button title="SignOut" onPress={signOut} />

        <Text>{data.data}</Text>
        <FastImage
          style={{width: 300, height: 300}}
          source={{
            uri: data.data,
          }}
          onLoadEnd={() => {
            FastImage.cacheControl.cacheOnly;
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeKeyComponent>
  );
};

export default AddDish;
