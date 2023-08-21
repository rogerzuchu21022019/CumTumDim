//root.tsx
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/app/app_store/Store';
import {PersistGate} from 'reduxjs-toolkit-persist/lib/integration/react';
import codePush, {DownloadProgress} from 'react-native-code-push';
import App from './App';
import Snackbar from 'react-native-snackbar';
import ModalDownLoad from './src/app/components/modal/ModalDownLoad';
const Root = () => {
  // console.log('white screen');
  const [isShowProgress, setIsShowProgress] = useState(false);
  const [receivedBytes, setReceivedBytes] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

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

  const onDownLoadProgress = (progress: DownloadProgress) => {
    setReceivedBytes(progress.receivedBytes);
    if (progress.totalBytes === progress.receivedBytes) {
      Snackbar.show({
        text: 'Cập nhật thành công.Bạn chưa hãy reset app',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

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
        <App />
      </PersistGate>
      <ModalDownLoad isShowProgress={isShowProgress} isLoading={isLoading} />
    </Provider>
  );
};

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};
export default codePush(codePushOptions)(Root);
