/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import ReviewFMeScreenStack from '../../../components/navigation/ReviewFMeNavigation';

const ReviewFMeScreen = props => {
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
          <Text style={styles.appbarLeftText}>Chờ đánh giá</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ReviewedFMeScreen')} >
            <Text style={styles.appbarLeftText2}>Đã đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ReviewFMeScreenStack />
    </View>
  );
};

export default ReviewFMeScreen;

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
