import {Text, View} from 'react-native';
import React, {useState, Component} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {Table, Row, Rows} from 'react-native-table-component';
import styles from './Styles';

const PaymentZalo = () => {
     const [tableHead, setTableHead] = useState([
    'Mặt hàng',
    'Số lượng',
    'Giá',
    'Thành tiền',
  ]);
 
  const [tableData, setTableData] = useState([
    // name, amount, price
    ['Sườn bì chả', '3', '35', '105'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
    ['Sườn chả', '2', '25', '50'],
  ]);
  const [tableDataFinal, setTableDataFinal] = useState([
  
    ['Tổng tiền : 155k'],
  ]);

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
                <Rows data={tableData} textStyle={styles.textMoney}  style={styles.money}/>
                <Rows data={tableDataFinal} textStyle={styles.textTotalMoney}  style={styles.totalMoney}/>
              </Table>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default PaymentZalo;
