import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, Component} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {Table, Row, Rows, Col} from 'react-native-table-component';
import styles from './Styles';
import {useSelector} from 'react-redux';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {productSelector} from '../../../../product/sliceProduct';

import {LOG} from '../../../../../../../logger.config';
import {formatTime} from '../../../../../shared/utils/Moment';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { constants } from '../../../../../shared/constants';

const log = LOG.extend('PAYMENT_ZALO.JS');
const PaymentZalo = ({route,navigation}) => {
  const data = route.params.item;
  log.info('🚀 ~ file: PaymentZalo.js:12 ~ PaymentZalo ~ data:', data);
  const [tableHead, setTableHead] = useState([
    'Mặt hàng',
    'Số lượng',
    'Giá',
    'Thành tiền',
  ]);

  // const data = useSelector(productSelector);
  // log.error("🚀 ~ file: PaymentZalo.js:18 ~ PaymentZalo ~ data:", data)
  const mainData = data?.mainDishCart.map(item => {
    return [
      item.productName,
      item.amounts,
      item.price,
      item.price * item.amounts,
    ];
  });

  const extraData = data?.extraDishCart.map(item => {
    return [
      item.productName,
      item.amounts,
      item.price,
      item.price * item.amounts,
    ];
  });

  const toppingData = data?.toppingsCart.map(item => {
    return [
      item.productName,
      item.amounts,
      item.price,
      item.price * item.amounts,
    ];
  });

  const anotherData = data?.anotherCart.map(item => {
    return [
      item.productName,
      item.amounts,
      item.price,
      item.price * item.amounts,
    ];
  });
  const [tableMainData, setTableMainData] = useState(mainData);
  const [tableExtraData, setTableExtraData] = useState(extraData);
  const [tableToppingData, setTableToppingData] = useState(toppingData);
  const [tableAnotherData, setTableAnotherData] = useState(anotherData);
  const [tableDataFinal, setTableDataFinal] = useState([
    [`Tổng tiền : ${data?.moneyToPaid} K`],
  ]);

  const moToBack = () => {
    navigation.goBack();
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moToBack}>
              <View style={styles.icon}>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.viewShowBill}>
              <Text style={styles.textShowBill}>Show Bill</Text>
            </View>
            <View>
            </View>
          </View>
        
        </View>

        <View style={styles.body}>
          <View style={styles.groupItem}>
            <View style={styles.groupText}>
              <View style={styles.viewText}>
                <Text style={styles.textStore}>Cum Túm Đim</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>
                  Địa chỉ: 110 Tô Ký, P.Trung Mỹ Tây, Quận 12
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>ĐT : 0879175310 </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>Hoá Đơn hàng hoá</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>
                  Ngày : {formatTime(data?.createdAt)}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>
                  Trạng thái đơn hàng : {data?.paymentStatus}
                </Text>
              </View>
            </View>
            <View style={styles.viewTable}>
              <ScrollView>
                <Table
                  borderStyle={{
                    borderWidth: 2,
                    borderColor: '#c8e1ff',
                    borderColor: 'black',
                  }}>
                  <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={[styles.text]}
                  />
                  {mainData ? (
                    <Row
                      data={Array.of('Món chính')}
                      style={styles.head}
                      textStyle={[styles.text]}
                    />
                  ) : null}
                  <Rows
                    data={tableMainData}
                    textStyle={[styles.textMoney]}
                    style={styles.money}
                  />
                  {extraData ? (
                    <Row
                      data={Array.of('Món ăn thêm')}
                      style={styles.head}
                      textStyle={[styles.text]}
                    />
                  ) : null}
                  <Rows
                    data={tableExtraData}
                    textStyle={styles.textMoney}
                    style={styles.money}
                  />

                  {toppingData ? (
                    <Row
                      data={Array.of('Toppings')}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                  ) : null}
                  <Rows
                    data={tableToppingData}
                    textStyle={styles.textMoney}
                    style={styles.money}
                  />

                  {anotherData ? (
                    <Row
                      data={Array.of('Món khác')}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                  ) : null}
                  <Rows
                    data={tableAnotherData}
                    textStyle={styles.textMoney}
                    style={styles.money}
                  />
                  <Rows
                    data={tableDataFinal}
                    textStyle={styles.textTotalMoney}
                    style={styles.totalMoney}
                  />
                </Table>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default PaymentZalo;
