import {Text, View, Image, ScrollView, Flaslitst} from 'react-native';
import React from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import { DATA } from './Data';

const HomeAdmin = () => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupFinal}>
            <View style={styles.groupItemHeader}>
              <Image
                source={require('../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <View>
              <Image source={require('../../../../assets/iconBell.jpg')} />
            </View>
          </View>
          <View style={styles.strikethrough}></View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.itemOder}>
             
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
