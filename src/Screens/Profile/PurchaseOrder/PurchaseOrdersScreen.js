/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import PurchaseOrdersStack from '../../../components/navigation/PurchaseOrderNavigation';

const PurchaseOrdersScreen = props => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.body}>
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
      <PurchaseOrdersStack/>
      <Text style={styles.text}>PurchaseOrdersScreen</Text>
    </ScrollView>
  );
};

export default PurchaseOrdersScreen;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
    flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
});
