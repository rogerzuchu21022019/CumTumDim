// @ts-nocheck
import ImagePicker from 'react-native-image-crop-picker';

export const onCamera = async (setAvatar, setIsPicked) => {
  await ImagePicker.openCamera({
    cropping: false,
    width: 500,
    height: 500,
    includeExif: true,
    mediaType: 'photo',
    includeBase65: true,
  })
    .then(image => {
      console.log('🚀 ~ file: Camera.js:13 ~ onCamera ~ image:', image);
      setAvatar(image.path);
      setIsPicked(true);
    })
    .catch(error => {
      console.log('🚀 ~ file: Camera.js:18 ~ .then ~ error', error);
    });
};

export const onGallery = async (setAvatar, setIsPicked) => {
  await ImagePicker.openPicker({
    cropping: false,
    width: 500,
    height: 500,
    includeExif: true,
    mediaType: 'photo',
    includeBase64: true,
  })
    .then(image => {
      setAvatar(image.path);

      setIsPicked(true);
      // console.log(`testAvatar: ${JSON.stringify(image)}`); //=> image is a object
    })
    .catch(error => {
      console.log('🚀 ~ file: Camera.js:44 ~ onGallery ~ error:', error);
    });
};
