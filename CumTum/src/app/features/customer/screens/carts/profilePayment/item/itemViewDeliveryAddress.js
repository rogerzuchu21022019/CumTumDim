import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../../../../../shared/utils/Moment';
import styles from './stylesDeliveryAddress';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';
import React, {useState} from 'react';
import { LOG } from '../../../../../../../../logger.config';
const log = LOG.extend(`ITEM_VIEW_DETAIL_DELIVERY_ADDRESS.JS`)

const ItemViewPayment = ({item, navigation, index}) => {
  log.error('🚀 ~ file: ItemView.js:11 ~ ItemView ~ item:', item);
  const handleEditContact = contact => {
    // handle edit contact
  };
  const EditDeliveryAddrees = () => {
    navigation.navigate(Router.Edit_DELIVERY_ADDREES);
  };
  const [checkedId, setCheckedId] = useState();
  const handleCheck = id => {
    if (checkedId === id) {
      setCheckedId(0);
    } else {
      setCheckedId(id);
    }
  };
  return (
    <SafeKeyComponent>
      <TouchableOpacity onPress={() => handleCheck(1)}>
        <View style={styles.itemContainer}>
          <View style={styles.boxView}>
            <View style={styles.viewCheck}>
              <View
                style={[
                  styles.checkbox,
                  checkedId === 0 && styles.checkboxChecked,
                ]}></View>
            </View>

            <View style={styles.boxStatus}>
              <View style={styles.boxStatus1}>
                <Text style={styles.textItem1}>{item.name}</Text>
                <Text style={styles.textItem3}>| </Text>
                <Text style={styles.textItem2}>{item.phone} </Text>
                <View style={styles.viewbtn}>
                  <TouchableOpacity onPress={EditDeliveryAddrees}>
                    <Text style={styles.textItem3}>Sửa</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.boxStatus2}>
                
                <View style={styles.boxPrice}>
                  <Text style={styles.textItem}>Số {item.houseNumber}</Text>
                  <Text style={styles.textItem}> đường {item.street}</Text>
                  <Text style={styles.textItem}> phường {item.ward}</Text>
                </View>

                <View style={styles.boxPrice2}>
                  <Text style={styles.textItem}>thành phố {item.city}</Text>
                  <Text style={styles.textItem}> huyện {item.district}</Text>
                </View>

              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ItemViewPayment;
