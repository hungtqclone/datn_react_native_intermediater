/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import SalesOrderStack from '../../../components/navigation/SalesOrderNavigation';
const SalesOrderScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.body}>
      <View style={styles.appbar}>
        <View style={styles.appbarRight}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.appbarRightIcon}
              source={require('../../../assets/images/icons/icon_back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.appbarLeft}>
          <Text style={styles.appbarLeftText}>Đơn mua</Text>
        </View>
      </View>
      <View style={styles.money}>
        <View style={styles.moneyleft}>
          <Image
            style={styles.moneyIcon}
            source={require('../../../assets/images/icons/icon_money.png')}
          />
          <Text style={styles.moneyText}>Tiền chờ xử lí</Text>
          <Image
            style={styles.moneyIcon}
            source={require('../../../assets/images/icons/icon_warning.png')}
          />
        </View>
        <View style={styles.moneyRight}>
          <Text style={styles.moneyTextRight}>0 đ</Text>
          <Image
            style={styles.moneyIcon}
            source={require('../../../assets/images/icons/icon_arrow_right.png')}
          />
        </View>
      </View>
      <SalesOrderStack />
      <Text style={styles.text}>SalesOrderScreen</Text>
    </View>
  );
};

export default SalesOrderScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  appbar: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFCC00',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  appbarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appbarLeftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  appbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  appbarRightIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  text: {
    // flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
  money: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF5E6',
    height: 50,
    padding: 10,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  moneyIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  moneyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  moneyRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  moneyleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  moneyTextRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginRight: 10,
  },
});
