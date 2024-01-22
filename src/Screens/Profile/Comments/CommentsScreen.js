/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';

const CommentsScreen = props => {
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
          <Text style={styles.appbarLeftText}>Chợ tốt</Text>
        </View>
      </View>
      <Text>CommentsScreen</Text>
    </View>
  );
};

export default CommentsScreen;

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
