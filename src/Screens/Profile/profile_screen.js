/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/base'
import ImagePicker from 'react-native-image-crop-picker';
const Profile_screen = (props) => {
    const { navigation } = props;
    const [avatarSource, setAvatarSource] = useState(require('../../assets/images/avatarDetail.png'));

    const pickImage = async () => {
        try {
            const image = await ImagePicker.openPicker({
                // options
            });

            // Update the avatarSource with the selected image
            setAvatarSource({ uri: image.path });
        } catch (error) {
            console.log('ImagePicker Error: ', error);
        }
    };


    return (
        <ScrollView style={styles.body}>
            <View style={styles.appbar}>
                <View style={styles.appbarLeft}>
                    <Text style={styles.appbarLeftText}>Thêm</Text>
                </View>
                <View style={styles.appbarRight}>
                    <TouchableOpacity>
                        <Image style={styles.appbarRightIcon} source={require('../../assets/images/icons/icon_notification.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contbody}>
               <View style={styles.bodyhearder}>
               <View style={styles.infoAv}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image source={avatarSource} style={styles.avt} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/icons/icon_edit.png')} style={styles.iconedit} />
                    <View>
                        <Text style={styles.nameNguoiban}>Hiếu Android Shop</Text>
                        <View style={styles.reviewContainer}>
                            <Text style={styles.countReview}>4.9</Text>
                            <View style={styles.contStars}>
                                <Image source={require('../../assets/images/icons/icon_stars.png')} style={styles.iconStart} />
                                <Image source={require('../../assets/images/icons/icon_stars.png')} style={styles.iconStart} />
                                <Image source={require('../../assets/images/icons/icon_stars.png')} style={styles.iconStart} />
                                <Image source={require('../../assets/images/icons/icon_stars.png')} style={styles.iconStart} />
                                <Image source={require('../../assets/images/icons/icon_stars.png')} style={styles.iconStart} />
                            </View>
                            <Text style={styles.reviewText}>(0)</Text>
                        </View>
                        <View style={styles.dotOnl}>
                            <Text style={styles.txtOn0}>0</Text>
                            <Text style={styles.txtOnl}> Người theo dõi</Text>
                            <View style={styles.gach}></View>
                            <Text style={styles.txtOn0}>0</Text>
                            <Text style={styles.txtOnl}> Đang theo dõi</Text>
                        </View>


                    </View>
                </View>
                <View style={styles.contPoint}>
                    <TouchableOpacity style={styles.pointGood}>
                        <Text style={styles.txtPoint}>Điểm Tốt</Text>
                        <View style={styles.contIcon}>
                            <Text style={styles.txtPointCount}>0</Text>
                            <Image source={require('../../assets/images/icons/icon_star_green.png')} style={styles.iconPointGood} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cuGood}>
                        <Text style={styles.txtPoint}>Đồng Tốt</Text>
                        <View style={styles.contIcon}>
                            <Text style={styles.txtPointCount}>0</Text>
                            <Image source={require('../../assets/images/icons/icon_coin.png')} style={styles.iconCuGood} />
                        </View>
                    </TouchableOpacity>
                </View>
               </View>
                
                <View style={styles.contMagOrder}>
                    <Text style={styles.txtMagOrder}>Quản lý đơn hàng</Text>
                    <View style={styles.contMagOrderItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('PurchaseOrdersScreen')} style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_bag2.png')} style={styles.iconMagOrder} />
                            <Text style={styles.txtMagOrderItem}>Đơn mua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => navigation.navigate('SalesOrderScreen')} style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_order.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Đơn bán</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => navigation.navigate('SalesWalletScreen')}  style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_wallet.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Ví bán hàng</Text>
                        </TouchableOpacity>
                        </View>
                </View>
                <View style={styles.contMagOrder}>
                    <Text style={styles.txtMagOrder}>Tiện ích</Text>
                    <View style={styles.contMagOrderItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('PostSaved')} style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_heart_save.png')} style={styles.iconMagOrder} />
                            <Text style={styles.txtMagOrderItem}>Tin đăng đã lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => navigation.navigate('SavedSearchScreen')} style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_tag.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Tìm kiếm đã lưu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => navigation.navigate('ReviewStack')} style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_wallet.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Đánh giá từ tôi</Text>
                        </TouchableOpacity>
                        </View>

                </View>
                <View style={styles.contMagOrder}>
                    <Text style={styles.txtMagOrder}>Khác</Text>
                    <View style={styles.contMagOrderItem}>
                        <TouchableOpacity style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_setting.png')} style={styles.iconMagOrder} />
                            <Text style={styles.txtMagOrderItem}>Cài đặt tài khoản</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_phone.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Định giá điện thoại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_help.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Trợ giúp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icoin_note.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Đóng góp ý kiến</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contMagOrderItemLeft}>
                            <Image source={require('../../assets/images/icons/icon_logout.png')} style={styles.iconMagOrder1} />
                            <Text style={styles.txtMagOrderItem}>Đăng xuất</Text>
                        </TouchableOpacity>
                        </View>

                </View>


            </View>
        </ScrollView>
    )
}

export default Profile_screen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
    },
    appbar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#FFCC00',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    appbarLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appbarLeftText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    appbarRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appbarRightIcon: {
        width: 30,
        height: 30,
    },
    contbody: {
        flex: 1,
    },
    bodyhearder: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderBottomColor: '#ddd',
    },
    infoAv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    avt: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
        position: 'relative',
        top: 20,
        left: 0,
    },
    iconedit: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    nameNguoiban: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    countReview: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 5,
    },
    contStars: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        paddingTop: 7,
    },
    iconStart: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    reviewText: {
        fontSize: 12,
        color: '#666',
    },
    dotOnl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#0F0',
        marginRight: 5,
    },
    txtOnl: {
        fontSize: 12,
        color: '#666',
    },
    gach: {
        width: 1,
        height: 10,
        backgroundColor: '#666',
        marginHorizontal: 5,
    },
    txtOn0: {
        fontSize: 12,
        color: '#666',
        fontWeight: 'bold',
    },
    contPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    pointGood: {
        padding: 10,
        width: '45%',
        marginRight: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
    },
    cuGood: {
        padding: 10,
        width: '45%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,

    },
    txtPoint: {
        fontSize: 12,
        color: '#666',
    },
    iconPointGood: {
        width: 20,
        height: 20,
    },
    iconCuGood: {
        width: 20,
        height: 20,
    },
    contIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtPointCount: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 5,
    },
    //danh sách các option
    contMagOrder: {
        marginTop: 10,
    },
    txtMagOrder: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    contMagOrderItem: {
        flexDirection: 'column',
    },
    contMagOrderItemLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 20,
        borderColor: '#ddd',
        borderWidth: 0.5,
        backgroundColor: '#fff',
    },
    iconMagOrder: {
        width: 35,
        height: 35,
    },
    iconMagOrder1: {
        width: 35,
        height: 35,
    },
    txtMagOrderItem: {
        fontSize: 12,
        color: '#666',
        paddingHorizontal: 10,
    },

})