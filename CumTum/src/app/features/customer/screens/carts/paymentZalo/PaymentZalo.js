import {Text, View} from 'react-native';
import React, {useState, Component} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {Table, Row, Rows} from 'react-native-table-component';
import styles from './Styles';
import {useSelector} from 'react-redux';
import {productSelector} from '../../../../product/sliceProduct';
import {LOG} from '../../../../../../../logger.config';
const log = LOG.extend('PAYMENT_ZALO.JS');
const PaymentZalo = () => {
  const [tableHead, setTableHead] = useState([
    'Mặt hàng',
    'Số lượng',
    'Giá',
    'Thành tiền',
  ]);

  const data = useSelector(productSelector);
  // log.error("🚀 ~ file: PaymentZalo.js:18 ~ PaymentZalo ~ data:", data)
  const mainData = data.mainDishCart.map(item => {
    return [item.name, item.amount, item.price, item.price * item.amount];
  });

  const extraData = data.extraDishCart.map(item => {
    return [item.name, item.amount, item.price, item.price * item.amount];
  });

  const toppingData = data.toppingsCart.map(item => {
    return [item.name, item.amount, item.price, item.price * item.amount];
  });

  const anotherData = data.anotherCart.map(item => {
    return [item.name, item.amount, item.price, item.price * item.amount];
  });
  const [tableMainData, setTableMainData] = useState(mainData);
  const [tableExtraData, setTableExtraData] = useState(extraData);
  const [tableToppingData, setTableToppingData] = useState(toppingData);
  const [tableAnotherData, setTableAnotherData] = useState(anotherData);
  const [tableDataFinal, setTableDataFinal] = useState([['Tổng tiền : 155k']]);

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.viewShowBill}>
            <Text style={styles.textShowBill}>Show Bill</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.groupItem}>
            <View style={styles.groupText}>
              <View style={styles.viewText}>
                <Text style={styles.text}>Cum Túm Đim</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>
                  Đường số 110 Tô Ký, P.Trung Mỹ Tây, Quận 12
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>ĐT : 0342128462 - 0866704365 </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>Hoá Đơn hàng hoá</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>Ngày : 13/03/2023</Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.text}>Giờ vào : 08:39</Text>
              </View>
            </View>
            <View style={styles.viewTable}>
              <Table
                borderStyle={{
                  borderWidth: 2,
                  borderColor: '#c8e1ff',
                  borderColor: 'black',
                }}>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                {mainData ? (
                  <Row
                    data={Array.of('Món chính')}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                ) : null}
                <Rows
                  data={tableMainData}
                  textStyle={styles.textMoney}
                  style={styles.money}
                />
                {extraData ? (
                  <Row
                    data={Array.of('Món ăn thêm')}
                    style={styles.head}
                    textStyle={styles.text}
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
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default PaymentZalo;
