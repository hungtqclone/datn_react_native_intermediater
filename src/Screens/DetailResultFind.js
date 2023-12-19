import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const DetailResultFind = () => {
    const [value, setValue] = useState({ values: [0, 30000000], })
    const multiSliderValuesChange = (values) => {
        setValue({
            values,
        });
    }
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Image source={require('../assets/images/icons/iconX.png')} style={styles.iconHe} />
                <Text style={styles.headerText}>LỌC KẾT QUẢ</Text>
            </View>
            <View style={styles.danhmuc}>
                <Text style={styles.textDanhMuc}>Danh mục</Text>
                <TextInput placeholder='Nhập danh mục' style={styles.input} placeholderTextColor='orange' />
                <Text style={styles.textDanhMuc}>
                    Giá từ {value.values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đến {value.values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
                </Text>
                <MultiSlider
                    values={[value.values[0], value.values[1]]}
                    sliderLength={200}
                    selectedStyle={{ backgroundColor: '#CD5808', }}
                    containerStyle={{ alignSelf: 'center', marginTop: -10 }}
                    onValuesChange={multiSliderValuesChange}
                    markerStyle={{
                        ...Platform.select({
                            android: {
                                height: 13,
                                width: 13,
                                borderRadius: 50,
                                backgroundColor: '#CD5808'
                            }
                        })
                    }}
                    min={0}
                    max={30000000}
                    step={100000}
                />


            </View>
            <View style={styles.sortBy}>
                <Text style={styles.textDanhMuc}>Sắp xếp theo</Text>
                <View style={styles.sortButtons}>
                    <TouchableOpacity style={styles.buton}>
                        <Image source={require('../assets/images/icons/iconClock.png')} style={styles.iconSort} />
                        <Text style={styles.textButon}>Tin mới</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butonPrice} >
                        <Image source={require('../assets/images/icons/iconPrice.png')} style={styles.iconSort} />
                        <Text style={styles.textButon}>Giá thấp</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.filterOptions}>
                <Text style={styles.textDanhMuc}>Đăng bởi</Text>
                <View style={styles.filterItems}>
                    <View style={styles.containerDangboi}>
                        <View style={styles.textBanchuyen}>
                            <Image source={require('../assets/images/icons/IconPeople.png')} style={styles.iconSort} />
                            <Text style={styles.textDanhMuc}>Bán chuyên</Text>
                        </View>
                        <View>
                            <BouncyCheckbox onPress={(isChecked: boolean) => { }} />
                        </View>
                    </View>
                    <View style={styles.containerCanhan}>
                        <View style={styles.textBanchuyen}>
                            <Image source={require('../assets/images/icons/iconCaNhan.png')} style={styles.iconSort} />
                            <Text style={styles.textDanhMuc}>Cá nhân</Text>
                        </View>

                        <BouncyCheckbox onPress={(isChecked: boolean) => { }} />
                    </View>

                </View>
            </View>
            <View style={styles.filterOptions}>
                <Text style={styles.textDanhMuc}>Bạn muốn</Text>
                <View style={styles.filterItems}>
                    <View style={styles.contMua}>
                        <View style={styles.textBanchuyen}>
                            <Image source={require('../assets/images/icons/iconPurchuse.png')} style={styles.iconSort} />
                            <Text style={styles.textDanhMuc}>Mua</Text>
                        </View>
                        <BouncyCheckbox onPress={(isChecked: boolean) => { }} />
                    </View>
                    <View style={styles.contBan}>
                        <View style={styles.textBanchuyen}>
                            <Image source={require('../assets/images/icons/iconSale.png')} style={styles.iconSort} />
                            <Text style={styles.textDanhMuc}>Bán</Text>
                        </View>
                        <BouncyCheckbox onPress={(isChecked: boolean) => { }} />
                    </View>
                </View>
            </View>
            <View style={styles.displayOptions}>
                <Text style={styles.textDanhMuc}>Hiển thị hình dạng</Text>
                <View style={styles.displayButtons}>
                    <TouchableOpacity style={styles.butonhinh}>
                        <Text style={styles.textButonhinh}>Hình & chữ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butonhinh}>
                        <Text style={styles.textButonhinh}>Lưới</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.textButon}>
                    <Text style={styles.applyButton}>ÁP DỤNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 10,
        // flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 15,
        color: 'black',
        alignItems: 'center',
        marginLeft: 100,
    },
    danhmuc: {
        marginBottom: 20,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',

    },
    textDanhMuc: {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: 'black',
    },
    input: {
        height: 40,
        borderBottomWidth: 1, // Đặt độ dày của border bên dưới
        borderBottomColor: 'gray', // Đặt màu của border bên dưới
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    sortBy: {
        marginBottom: 20,
    },
    sortButtons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        height: 100,
    },
    filterOptions: {
        marginBottom: 20,
    },
    filterItems: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        height: 70,
    },
    displayOptions: {
        marginBottom: 20,
    },
    displayButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'white',
        height: 70,
    },
    applyButton: {
        padding: 10,
        backgroundColor: '#FFBF17',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    buton: {
        height: 50,
        padding: 10,
        backgroundColor: '#FFBF17',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        elevation: 5,
        textAlign: 'center',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textButon: {
        color: 'black',
        fontSize: 12,

    },
    iconSort: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    butonPrice: {
        padding: 10,
        backgroundColor: 'white',
        height: 50,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
    },
    textBanchuyen: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: 'black',
    },
    containerDangboi: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    containerCanhan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    contMua: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    contBan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 100,
    },
    butonhinh: {
        width: 150,
        padding: 10,
        backgroundColor: '#FFBF17',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 5,
    },
    textButonhinh: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        width: '100%'
    },

});

export default DetailResultFind;
