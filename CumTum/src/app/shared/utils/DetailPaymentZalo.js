import {
  NativeEventEmitter,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';




import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {LOG} from '../../../../logger.config';
const log = LOG.extend('PaymentZalo.js');

const PaymentCart = ({route}) => {
  const {order} = route.params;
  const [money, setMoney] = useState('10000');
  const [token, setToken] = useState('');
  const [returncode, setReturnCode] = useState('');


  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcomeHead}>Chi tiết giao dịch</Text>
        <Text style={styles.welcome}>Tổng tiền phải trả</Text>
        <Text>{order.amountAnotherDish}</Text>
        <Text>{order.amountDish}</Text>
        <Text>{order.amountExtraDish}</Text>
        <Text>{order.amountMainDish}</Text>
        <Text>{order.amountToppings}</Text>
        <Text>{order.mainDishCart[0].name}</Text>
        <Text>{order.moneyToPaid}</Text>

        <Button
          title="Xác Nhận"
          onPress={() => {
            createOrder(money);
          }}
        />
        {returncode == 1 ? (
          <Button
            title="Pay order"
            type="outline"
           
          />
        ) : null}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  welcomeHead: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PaymentCart;
