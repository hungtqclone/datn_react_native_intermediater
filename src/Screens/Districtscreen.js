import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';

const Districtscreen = () => {
  const data = [
    {key: 'Tất Cả'},
    {key: 'Quận 1'},
    {key: 'Quận 2'},
    {key: 'Quận 3'},
    {key: 'Quận 4'},
    {key: 'Quân 5'},
    {key: 'Quận 6'},
    {key: 'Quận 7'},
    {key: 'Quận 8'},
    {key: 'QUận 9'},
    {key: 'QUận 10'},
    {key: 'QUận 11'},
    {key: 'QUận 12'},
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
            <View
              style={{
                width: 19,
                height: 19,
                backgroundColor: 'white',
              }}></View>
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
          CHỌN QUẬN, HUYỆN, THỊ XÃ
        </Text>
      </View>
      <FlatList data={data} renderItem={({item}) => renderItem(item)} />
    </SafeAreaView>
  );
};

export default Districtscreen;
