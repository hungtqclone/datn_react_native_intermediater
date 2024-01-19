/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const HelpScreen = (props) => {
    const {navigation} = props;
  return (
    <View>
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
          <Text style={styles.appbarLeftText}>Trợ giúp</Text>
        </View>
      </View>
      <Text>Help</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
    appbar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFCC00',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
      },
      appbarRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      appbarRightIcon: {
        width: 20,
        height: 20,
      },
      appbarLeft: {
        flex: 8,
        justifyContent: 'center',
      
      },
      appbarLeftText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});
