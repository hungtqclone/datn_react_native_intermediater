import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../components/users/UserContext'
import { formatDate, styleNumber } from '../styleSheets/styleJS'
import AxiosInstance from '../components/helpers/Axiosintance'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ItemMarket = ({ item, index, navigation }) => {
    const { user } = useContext(UserContext)
    const userId = user?._id

    const [showCollapseButton, setShowCollapseButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [saved, setSaved] = useState(false)
    const [isPostSaved, setIsPostSaved] = useState(false)

    const fetchData = async () => {
        const saveStorage = await AsyncStorage.getItem('saved');
        const saved = JSON.parse(saveStorage)
        setSaved(saved.some(post => post.postId && post.postId._id === item._id))

    }
    useEffect(() => {
        fetchData()
    }, []);


    // const isPostSaved = saved.some(post => post.postId && post.postId._id === item._id);
    const MAX_ADDRESS_LENGTH = 30;
    const MAX_HEIGHT = 100;
    const checkContentHeight = event => {
        const { height } = event.nativeEvent.layout;

        if (height > MAX_HEIGHT) {
            setShowCollapseButton(true);
        } else {
            setShowCollapseButton(false);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const checkUser = userId == item.userid._id ? true : false;

    const onSaved = async () => {
        try {
            setIsLoading(true)
            setIsButtonDisabled(true)
            const result = await AxiosInstance().post(`/api/saved/save-or-notSave?userId=${userId}&postId=${item._id}`)

            if (result.result == true) {
                setSaved(!saved)
            }
            setIsLoading(false)
            setIsButtonDisabled(false)
        } catch (error) {
            setIsLoading(false)
            setIsButtonDisabled(false)
            console.log("error renderItem NearYou.js: ", error)
            return false
        }
    }
    return (
        <View key={index} style={[styles.container, { display: checkUser ? "none" : 'flex' }]}>
            <View style={styles.header}>
                <Image
                    style={styles.img}
                    source={require('../assets/images/icons/man-person-icon.png')}
                />
                <View>
                    <View style={styles.nameshop}>
                        <Text style={styles.textnameshop}>{item.userid == null ? "Người dùng không tồn tại" : item.userid.name}</Text>
                        <Image
                            style={styles.iconbag}
                            source={require('../assets/images/icons/icon_bag.png')}
                        />
                    </View>
                    <View style={styles.timecont}>
                        <Text> {formatDate(item.created_AT)}</Text>
                        <View style={styles.circle} />
                        <Text>5km</Text>
                    </View>
                </View>
                {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('theo dõi')}>
            <Text style={styles.txtBtn}>Theo dõi</Text>
          </TouchableOpacity> */}
            </View>
            <View style={styles.bodycont}>
                {/* Định vị hiện tại ở góc trên bên trái */}
                <View style={styles.currentLocation} zIndex={2}>
                    <Image
                        source={require('../assets/images/icons/icon_address.png')}
                        style={styles.imgaddress}
                    />
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
                {/* Danh sách Gridview */}
                <FlatList
                    scrollEnabled={false}
                    data={item.files.slice(0, 4)} // Chỉ hiển thị 4 ảnh đầu tiên
                    renderItem={({ item, index }) => (
                        // console.log('Constructed Image URL:', `${urlServer}${item}`),
                        <View key={index} style={styles.gridItem}>
                            <Image
                                source={{ uri: item }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    )}
                    keyExtractor={index => index.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.nameprice}
                    onPress={() => navigation.navigate('DetailProduct', { id_product: item._id })}

                >
                    <View style={styles.cont_nameprice}>
                        <Text style={styles.textnameprice}> {item.title} </Text>
                        <Text style={styles.textprice}>{styleNumber(item.price)} đ</Text>
                    </View>
                    <Image
                        style={styles.icon_arrow_right}
                        source={require('../assets/images/icons/icon_arrow_right.png')}
                    />
                </TouchableOpacity>
                <View style={styles.infoPro} onLayout={checkContentHeight}>
                    {/* <Text style={styles.textInfoPro}>{renderContent()}</Text> */}
                    <Text style={styles.textInfoPro}>{item.detail}</Text>
                    <TouchableOpacity style={styles.btncall} onPress={() => handleCallPress(item.userid.phone)}>
                        <Text style={styles.textcall}>Liên hệ ngay: </Text>
                        <Text style={styles.textcall}>{item.userid.phone}</Text>
                    </TouchableOpacity>
                    {showCollapseButton && (
                        <TouchableOpacity onPress={toggleExpand}>
                            <Text style={styles.readMoreText}>
                                {isExpanded ? 'Thu gọn' : 'Thêm'}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={styles.btncontact}>
                <TouchableOpacity style={styles.btnCall} onPress={() => onSaved()} disabled={isButtonDisabled}>
                    <Image
                        style={styles.iconCall}
                        source={saved ? require('../assets/images/icons/heart.png') : require('../assets/images/icons/heart2.png')}
                    />
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                        <Text style={styles.txtBtnCall}>{saved ? 'Đã lưu' : 'Lưu tin'}</Text>
                    )}
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.btnCall}>
            <Image
              style={styles.iconCall}
              source={require('../../assets/images/icons/icon_chat.png')}
            />
            <Text style={styles.txtBtnCall}>Chat</Text>
          </TouchableOpacity> */}
                <TouchableOpacity style={styles.btnCall}>
                    <Image
                        style={styles.iconCall}
                        source={require('../assets/images/icons/iconShare.png')}
                    />
                    <Text style={styles.txtBtnCall}>Chia sẻ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemMarket
const styles = StyleSheet.create({
    //phần body tổng
    body: {
        flex: 1,
        backgroundColor: '#FDF5E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //phần địa chỉ
    contAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: '#fff',
        marginTop: 8,
    },
    imgaddress: {
        width: 50,
        height: 50,
    },
    icon_arrow_right: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalButton: {
        width: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#3498db',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    //phần header cont
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    nameshop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    textnameshop: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    circle: {
        marginHorizontal: 5,
        width: 6,
        height: 6,
        borderRadius: 5, // Chỉnh giá trị để tạo hình chấm tròn
        backgroundColor: 'grey', // Màu sắc của chấm tròn
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    timecont: {
        flexDirection: 'row',
        marginLeft: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#FFCC00',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 20,
        width: 150,
        alignContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',
    },
    iconbag: {
        width: 20,
        height: 20,
    },
    //phần body cont
    bodycont: {
        flex: 1,
    },
    gridItem: {
        flex: 1,
        margin: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 300,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    currentLocation: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
    },
    iconAddress: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    locationText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    remainingCount: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 15,
        elevation: 2,
    },
    remainingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3498db',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Màu nền overlay và độ trong suốt
    },
    overlayText: {
        color: '#fff', // Màu chữ trắng
        fontSize: 24,
        fontWeight: 'bold',
    },
    //phần tên và giá
    nameprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#FFFAF0',
        marginHorizontal: 10,
        alignContent: 'space-between',
        alignItems: 'center',
    },
    textnameprice: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    textprice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF0000',
    },
    cont_nameprice: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    //phần thông tin sản phẩm
    infoPro: {
        padding: 20,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    textInfoPro: {
        fontSize: 15,
        textAlign: 'left',
    },
    readMoreText: {
        color: 'grey', // Màu sắc của nút "Xem thêm" hoặc "Thu gọn"
        fontWeight: 'bold',
    },
    textcall: {
        fontSize: 15,

        color: 'blue',
    },
    btncall: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    // phần nút gọi điện và chat
    btncontact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    btnCall: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    txtBtnCall: {
        color: 'black',
    },
    iconCall: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    loadingIcon: {
        marginTop: 20,
    },
});
