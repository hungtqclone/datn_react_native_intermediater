/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/base'
import ImagePicker from 'react-native-image-crop-picker';

const Profile_screen = () => {
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
        <View style={styles.body}>
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
        </View>
    )
}

export default Profile_screen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
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
        padding: 10,
    },
    infoAv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    iconedit: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 5,  // Adjusted top position
        left: 5, // Adjusted left position
    },
    contPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
})