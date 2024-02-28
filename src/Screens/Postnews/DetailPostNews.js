import { View, Pressable, Modal, Text, Image, StyleSheet, TextInput, TouchableOpacity, VirtualizedList, Button, FlatList, ScrollView ,Alert} from 'react-native'
import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BottomSheet } from '@rneui/base';
import { getCategory, getDetailCategory, addPostNews, uploadImage } from '../ScreenService';
import { PNStyles } from '../../styleSheets/DetailPostNewsStyles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Icon } from 'react-native-paper';
import Postnews from '../Postnews';

const DetailPostnews = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleImage, setModalVisibleImage] = useState(false);
    const [categories, setCategories] = useState([]);
    const [idCategory, setIdCategory] = useState('');
    const { navigation, route } = props;
    const { params } = route;
    const { _id, name } = params;
    const [idPost, setIdPost] = useState(_id);
    const [namePost, setName] = useState(name);
    urlApi = 'http://datnapi.vercel.app/'

    // image
    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImagesCount, setSelectedImagesCount] = useState(0);
    // postnews
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [created_AT, setCreated_AT] = useState('');
    const [files, setFiles] = useState('');
    const [userid, setUserid] = useState('');
    const [brandid, setBrandid] = useState('');
    const [properties, srtProperties] = useState([]);
    // properties
    const [statusTT, setStatusTT] = useState('');
    const [brand, setBrand] = useState('');
    const [warranty, setWarranty] = useState('');
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        console.log('id', idPost);
        console.log('name', namePost);
    }, [idPost, name]);

    const handleTouchableOpacityPress = (newIdPost, newNamePost) => {
        setIdPost(newIdPost);
        setName(newNamePost);
        setModalVisible(false);
    }
    const CloseModel = () => {
        setModalVisible(false);
    }
    const ongetCategory = async () => {
        const categories = await getCategory();
        setCategories(categories);
    }
    const ongetDetailCategory = async () => {
        const detailCategory = await getDetailCategory(idCategory);
        setCategories(detailCategory)
    }
    useEffect(() => {
        if (idCategory == null) {
            ongetCategory();
        } else {
            ongetDetailCategory();
        }
    }, [idCategory]);

    // Add post and image
    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            setImage(asset.uri);
            setModalVisible(false);
            // upload image
            const formData = new FormData();
            formData.append('image', {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName,
            });
            const data = await uploadImage(formData);
            setImagePath(data.path);
        }
        updateSelectedImages();
    }, []);

    const openCamera = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchCamera(options, takePhoto);
        updateSelectedImages();
    }, []);

    const openLibrary = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchImageLibrary(options, takePhoto);
        updateSelectedImages();
    }, []);

    const save = useCallback(async () => {
        const currentDate = new Date();
        const properties = {
            statusTT,
            brand,
            warranty,
            origin
        };
        const data = {
            title,
            detail,
            location: 'HCM',
            price,
            activable: true,
            role:'mua',
            created_AT: currentDate,
            files: [imagePath],
            userid:'6587edd36c13142ab0adcd86',
            brandid:'6587edd36c13142ab0adcd86',
            properties,
            idCategory: idPost,

        };
        const response = await addPostNews(data);
        console.log(response);
        if(response == false){
            Alert.alert('Thêm thất bại');
        }
        Alert.alert('Thêm Thành công');
        setImage(null);
        setImagePath(null);
        setTitle('');
        setDetail('');
        setLocation('');
        setPrice('');
        setCreated_AT('');
        setFiles('');
        setStatusTT('');
        setBrand('');
        setWarranty('');
        setOrigin('');
        setUserid('');
        setBrandid('');
    }, [imagePath, title, detail, location, price, created_AT, statusTT, brand, warranty, origin, userid, brandid]);

    const updateSelectedImages = () => {
        console.log('>>>>>' + imagePath);
        if (selectedImages.length < 5) {
            const newSelectedImages = [...selectedImages, imagePath];
            setSelectedImages(newSelectedImages);
            setSelectedImagesCount(newSelectedImages.length);
        }
    };
    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={PNStyles.contaitong} onPress={() => handleTouchableOpacityPress(item._id, item.name)}>
                <View style={PNStyles.contaiimg}>
                    <Image style={PNStyles.img} source={{ uri: `${urlApi}${item.icon}` }} />
                </View>
                <View style={PNStyles.contaiCity}>
                    <Text style={PNStyles.txtCity}>{item.name}</Text>
                    <View>
                        <Image source={require('../../../image/show-right.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={PNStyles.body}>
            <View style={PNStyles.containerse}>
                <Image style={PNStyles.icon} source={require('../../../image/back.png')} />
                <Image style={PNStyles.iconchotot} source={require('../../../image/icon_chotot.jpg')} />
            </View>
            <ScrollView>
                <Pressable style={PNStyles.presContai} onPress={() => setModalVisible(true)}>
                    <View style={PNStyles.contaicolum}>
                        <View style={PNStyles.contairow}>
                            <Text style={PNStyles.txtCate} >Danh mục tin đăng</Text>

                        </View>
                        <Text style={PNStyles.txtContent}>Đồ điện tử - {namePost}</Text>
                    </View>
                    <Image style={PNStyles.imgDow} source={require('../../../image/down.png')}></Image>
                </Pressable>

                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>THÔNG TIN CHI TIẾT</Text>
                    <View style={PNStyles.viewrow}>
                        <Text>Xem thêm về </Text>
                        <Pressable>
                            <Text style={PNStyles.txtQD}> Quy định của Chợ Tốt</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={PNStyles.contaiupload}>
                    <TouchableOpacity style={PNStyles.tcouploadimg} onPress={() => setModalVisibleImage(true)}>
                        <Image source={require('../../../image/camera_org.png')}></Image>
                        <Text style={PNStyles.txtloadimg}>ĐĂNG TỪ 01 ĐẾN 06 HÌNH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={PNStyles.tcouploadimg}>
                        <Image source={require('../../../image/video_org.png')}></Image>
                        <Text style={PNStyles.txtloadimg}>ĐĂNG ĐA 01 VIDEO</Text>
                        <Text style={PNStyles.txtThang}>BẠN ĐÃ ĐĂNG 0/10 VIDEO TRONG THÁNG</Text>
                    </TouchableOpacity>
                    <TextInput value={statusTT} onChangeText={setStatusTT} placeholder='Tình trạng' style={PNStyles.inputTT} />
                    <TextInput value={brand} onChangeText={setBrand} placeholder='Hãng' style={PNStyles.inputTT} />
                    <TextInput value={warranty} onChangeText={setWarranty} placeholder='Chính sách bảo hành' style={PNStyles.inputTT} />
                    <TextInput value={origin} onChangeText={setOrigin} placeholder='Xuất xứ' style={PNStyles.inputTT} />
                    <TextInput value={price} onChangeText={setPrice} placeholder='Giá bán' style={PNStyles.inputTT} />
                </View>
                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>TIÊU ĐỀ TIN ĐĂNG VÀ MÔ TẢ CHI TIẾT</Text>
                </View>
                <View style={PNStyles.contaiupload}>
                    <TextInput value={title} onChangeText={setTitle} placeholder='Tiêu đề tin đăng' style={PNStyles.inputTT} />
                    <TextInput
                        value={detail}
                        onChangeText={setDetail}
                        multiline
                        numberOfLines={4}
                        maxLength={40} placeholder='Mô tả chi tiết' style={PNStyles.inputTTMT} />
                </View>

                <View style={PNStyles.viewtile}>
                    <Text style={PNStyles.txtTT}>THÔNG TIN NGƯỜI BÁN</Text>
                </View>
                <View style={PNStyles.contaiupload}>
                    <Pressable style={PNStyles.presAddres}>
                        <View style={PNStyles.contaicolum}>
                            <Text >Địa chỉ</Text>
                        </View>
                        <Image style={PNStyles.imgDow} source={require('../../../image/down.png')}></Image>
                    </Pressable>
                </View>

                <View style={PNStyles.contaiBtn}>
                    <Pressable style={PNStyles.btnXT}>
                        <Text style={PNStyles.txtXT}>
                            XEM TRƯỚC
                        </Text>
                    </Pressable>
                    <Pressable style={PNStyles.btnDT} onPress={save}>
                        <Text style={PNStyles.txtDT}>ĐĂNG TIN</Text>
                    </Pressable>
                </View>
            </ScrollView>
            {modalVisible &&
                <View style={PNStyles.overlay} />
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={PNStyles.centeredView}>
                    <View style={PNStyles.modalView}>
                        <View style={PNStyles.Container}>
                            <View style={PNStyles.contaiappbar}>
                                <Pressable style={PNStyles.pres} onPress={CloseModel} >
                                    <Image source={require('../../../image/close.png')} />
                                </Pressable>
                                <View style={PNStyles.contaitxt}>
                                    <Text style={PNStyles.txtTille}>CHỌN DANH MỤC</Text>
                                </View  >
                            </View>
                            <View style={PNStyles.contaitxp}>
                                <Image source={require('../../../image/searchBar.png')} />
                                <TextInput placeholder='Nhập từ khóa để lọc' placeholderTextColor={'#9C9C9C'} style={PNStyles.txpserch}>
                                </TextInput>
                            </View>
                            <FlatList
                                renderItem={renderItem}
                                data={categories}
                                keyExtractor={item => item._id}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            {modalVisibleImage &&
                <View style={PNStyles.overlay} />
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleImage}
            >
                <View style={PNStyles.centeredView}>
                    <View style={PNStyles.modalView}>
                        <View style={PNStyles.viewModel2}>
                            <Pressable onPress={() => setModalVisibleImage(false)} >
                                <Image source={require('../../../image/close.png')} />
                            </Pressable>
                            <Text style={PNStyles.txtGDMD}>Gần đây</Text>
                            <View style={PNStyles.viewMD}>
                                <Pressable onPress={openLibrary}>
                                    <Image style={PNStyles.imgpicture} source={require('../../../image/picture.png')} />
                                </Pressable>
                                <Text>{`Đã chọn ${selectedImagesCount}/5`}</Text>
                            </View>
                        </View>
                        <View style={PNStyles.viewROW}>
                            <TouchableOpacity style={PNStyles.tcouploadimg2} onPress={openCamera}>
                                <Image source={require('../../../image/camera_org.png')}></Image>
                                <Text style={PNStyles.txtloadimg2}>Chụp hình</Text>
                            </TouchableOpacity >
                            {image ?
                                <TouchableOpacity style={PNStyles.viewImage} onPress={openLibrary} disabled={selectedImages.length >= 5}>
                                    <Image style={PNStyles.imgSelect} source={{ uri: image }}></Image>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={PNStyles.viewImage} >
                                    <Image style={PNStyles.imgSelect} source={require('../../../image/avt.png')}></Image>
                                </TouchableOpacity>

                            }
                        </View>
                        <View style={PNStyles.viewAl}>
                            <Pressable style={PNStyles.btnModelTT}  >
                                <Text style={PNStyles.txtModelTT}>Tiếp tục</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default DetailPostnews

