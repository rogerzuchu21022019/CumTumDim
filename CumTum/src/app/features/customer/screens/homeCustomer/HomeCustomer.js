import {View, Text, Button, ActivityIndicator} from 'react-native';

import Router from '../../../../navigation/Router';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../../admin/sliceAuth';
import {fetchSignOut} from '../../../admin/apiAdmin';
import {constants} from '../../../../shared/constants';

const HomeCustomer = ({navigation}) => {
  const data = useSelector(authSelector);
  console.log('🚀 ~ file: HomeCustomer.js:19 ~ handleLogout ~ data:', data);

  const isLoading = data.isLoading;
  console.log("🚀 ~ file: HomeCustomer.js:15 ~ HomeCustomer ~ isLoading:", isLoading)

  // useEffect(() => {
  //   data ? moveTo() : null;
  //   return () => {};
  // }, [data]);

  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
  };
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };

  return (
    <SafeKeyComponent>
      <View>
        <Text>Home Customer</Text>
        <Button title="Logout" onPress={handleLogout} />

        <View
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
          }}>
          {isLoading ? (
            <ActivityIndicator size="large" color={constants.COLOR.RED} />
          ) : null}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeCustomer;
