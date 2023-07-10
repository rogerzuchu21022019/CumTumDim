import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import notifee, {EventType} from '@notifee/react-native';

import Router from './src/app/navigation/Router';

import {Store} from './src/app/app_store/Store';

// import Provider
import {Provider, useDispatch, useSelector} from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import DetailCard from './src/app/features/admin/screens/homeAdmin/detailCart/DetailCard';
import CustomerStack from './src/app/navigation/CustomerStack';

// import RootNavigation
import {navigationRef} from './src/app/navigation/RootNavigation';

// Redux Persist

import {persistStore} from 'reduxjs-toolkit-persist';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';

import LoginScreen from './src/app/features/auth/login/Login';
import SplashScreen from './src/app/features/auth/splashScreen/SplashScreen';
import UpdateInformation from './src/app/features/auth/updateInformation/UpdateInformation';

import Payment from './src/app/features/customer/screens/carts/payment/Payment';
import EditProfile from './src/app/features/customer/screens/profiles/editProfile/EditProfile';
import UploadImage from './src/app/features/customer/screens/profiles/uploadImage/UploadImage';
import RingBell from './src/app/features/customer/screens/homes/ringBell/RingBell';
import codePush, {
  CodePushOptions,
  DownloadProgress,
} from 'react-native-code-push';

let persistor = persistStore(Store);

import CartNoItem from './src/app/features/customer/screens/carts/cart/cartWithNoItem/CartNoItem';
import RingBellAdmin from './src/app/features/admin/screens/homeAdmin/ringBellAdmin/RingBellAdmin';
import AddDeliveryAddress from './src/app/features/customer/screens/carts/profilePayment/addDeliveryAddress/AddDeliveryAddress';
import {requestUserPermission} from './src/app/shared/utils/PermissionFCM';
import ModalDownLoad from './src/app/components/modal/ModalDownLoad';
import Snackbar from 'react-native-snackbar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const Stack = createNativeStackNavigator();
  const [isShowProgress, setIsShowProgress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [receivedBytes, setReceivedBytes] = useState<any>();
  useEffect(() => {
    requestPermissionNoti();
    requestUserPermission();
  }, []);

  const requestPermissionNoti = async () => {
    await notifee.requestPermission();
  };
  useEffect(() => {
    return notifee.onBackgroundEvent(async ({type, detail}) => {
      console.log(`Received background event: ${type}`, detail);
      // Handle the background event here
    });
  }, []);

  const onDownLoadProgress = (progress: DownloadProgress) => {
    setReceivedBytes(progress.receivedBytes);
    if (progress.totalBytes === progress.receivedBytes) {
      Snackbar.show({
        text: 'Cập nhật thành công.Bạn chưa hãy reset app',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  const codePushStatusDidChange = (syncStatus: codePush.SyncStatus) => {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update.');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action.');
        setIsShowProgress(true);
        setIsLoading(true);
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('App up to date.');
        setIsShowProgress(false);
        setIsLoading(false);
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log('Update cancelled by user..');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred');
        break;
    }
  };

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  useEffect(() => {
    codePush.sync(
      {
        installMode: codePush.InstallMode.ON_NEXT_RESTART,
      },
      codePushStatusDidChange,
      onDownLoadProgress,
    );
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <GestureHandlerRootView className="flex-1">
            <Stack.Navigator>
              <Stack.Screen
                name={Router.SPLASH_SCREEN}
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.LOGIN}
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name={Router.UPDATE_INFO}
                component={UpdateInformation}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name={Router.CUSTOMER_STACK}
                component={CustomerStack}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name={Router.ADMIN_STACK}
                component={AdminStack}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.DETAIL_CART_ADMIN}
                component={DetailCard}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />

              <Stack.Screen
                name={Router.PAYMENT}
                component={Payment}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.CART_WITH_NO_ITEM}
                component={CartNoItem}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.ADD_DELIVERY_ADDRESS}
                component={AddDeliveryAddress}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name={Router.EDIT_PROFILE}
                component={EditProfile}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name={Router.UPLOAD_IMAGE}
                component={UploadImage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.RING_BELL}
                component={RingBell}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Router.RING_BELL_ADMIN}
                component={RingBellAdmin}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </GestureHandlerRootView>
        </NavigationContainer>
        <ModalDownLoad isShowProgress={isShowProgress} isLoading={isLoading} />
      </PersistGate>
    </Provider>
  );
};
const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};
export default codePush(codePushOptions)(App);
