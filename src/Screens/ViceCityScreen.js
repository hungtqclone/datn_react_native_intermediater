import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';

const ViceCityScreen = () => {
  const data = [
    {key: 'Toàn quốc'},
    {key: 'Thành Phố Hồ Chí Minh'},
    {key: 'Hà Nội'},
    {key: 'Đà Nẵng'},
    {key: 'Cần Thơi'},
    {key: 'Bình Dương'},
    {key: 'An Giang'},
    {key: 'Bắc Giang'},
    {key: 'Bắc Kan'},
    {key: 'Bà rịa-Vũng Tàu'},
    {key: 'Biên Hòa'},
    {key: 'Đồng Nai'},
  ];

  const renderItem = item => {
    return (
      <View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#F1F2F6',
            marginTop: 10,
            paddingVertical: 15,
          }}>
          <Text style={{}}>{item.key}</Text>
          <View
            style={{
              position: 'absolute',
              right: 5,
              paddingVertical: 15,
            }}>
            <Image
              style={{width: 19, height: 19}}
              source={require('../../assets/images/categories/arrow-point-to-right.png')}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', height: 68, backgroundColor: '#F1F2F6'}}>
        <Image
          style={{
            left: 10,
            flexDirection: 'row',
            alignItems: 'baseline',
            position: 'absolute',
            margin: 10,
          }}
          source={require('../../assets/images/icons/Group.png')}
        />
        <Text
          style={{
            fontFamily: ' Roboto',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 500,
            textAlign: 'center',
            marginTop: 8,
          }}>
          CHỌN TỈNH, THÀNH PHỐ
        </Text>
        
      </View>
      <FlatList data={data} renderItem={({item}) => renderItem(item)} />
    </SafeAreaView>
  );
};

export default ViceCityScreen;
