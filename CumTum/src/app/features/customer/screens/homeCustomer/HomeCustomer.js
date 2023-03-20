import {View, Text, Button, ActivityIndicator} from 'react-native';

import Router from '../../../../navigation/Router';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSignOut} from '../../../admin/apiAdmin';
import {constants} from '../../../../shared/constants';
import {LOG} from '../../../../../../logger.config';
import {productSelector} from '../../../product/sliceProduct';
import {useEffect} from 'react';
import {fetchCategories, fetchDishes} from '../../../product/apiProduct';

const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const data = useSelector(productSelector);
  console.log('🚀 ~ file: HomeCustomer.js:16 ~ HomeCustomer ~ data:', data);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
  }, [dispatch]);

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
          {/* {isLoading ? (
            <ActivityIndicator size="large" color={constants.COLOR.RED} />
          ) : null} */}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeCustomer;
