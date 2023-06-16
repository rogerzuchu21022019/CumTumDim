import React, {useEffect} from 'react';
import {constants} from '../../shared/constants';

import {ActivityIndicator,View} from 'react-native';
import Modal from 'react-native-modal';
import styleBox from '../input/StyleBox';

const ModalLoading = props => {
  const {isShowModal, isLoading, handleShowLoading} = props;

  useEffect(() => {
    if (isLoading) {
      handleShowLoading();
    }
  }, [isLoading]);
  return (
    <Modal
      style={{
        margin: 0,
      }}
      isVisible={isShowModal}
      animationType="slide"
      transparent={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropColor="grey">
      
      <View style={styleBox.container}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={constants.COLOR.WHITE}
            animating={isLoading}
          />
        ) : null}
      </View>
    </Modal>
  );
};

export default ModalLoading;

/* Sử dụng ở file component cha để truyền vào component con */
//Step1
// const isLoading = authSelect.isLoading;
// const [isShowLoading, setIsShowLoading] = useState(false);

//Step2
// const handleShowLoading = () => {
//   setIsShowLoading(!isShowLoading);
// };

//Step3
{
  /* <ModalLoading
isShowModal={isShowLoading}
isLoading={isLoading}
handleShowLoading={handleShowLoading}
navigation={navigation}
/> */
}

//Step4 Set up auto goBack
// const timeOut = setTimeout(() => {
//   navigation.goBack();
//   clearTimeout(timeOut);
// }, 1500);
