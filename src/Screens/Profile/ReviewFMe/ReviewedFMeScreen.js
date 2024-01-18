/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import ReviewFMeScreenTab from '../../../components/navigation/ReviewFMeNavigation';
const ReviewedFMeScreen = props => {
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
          <Text style={styles.appbarLeftText}>Đã đánh giá</Text>
        </View>
      </View>
      <ReviewFMeScreenTab/>
    </View>
  );
};

export default ReviewedFMeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    flexDirection: 'row',
    backgroundColor: '#FFCC00',
    height: 50,
    alignItems: 'center',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
  },
  appbarRight: {
    width: '10%',
    alignItems: 'center',
  },
  appbarRightIcon: {
    width: 20,
    height: 20,
  },
  appbarLeft: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  appbarLeftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  appbarLeftText2: {
    fontSize: 16,
    // fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#000',
  },
});
