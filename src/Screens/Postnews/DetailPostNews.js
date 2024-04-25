import {
  ActivityIndicator,
  View,
  Pressable,
  Modal,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  VirtualizedList,
  Button,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { BottomSheet } from '@rneui/base';
import {
  getCategory,
  getDetailCategory,
  addPostNews,
  getBrands,
  uploadImage,
} from '../ScreenService';
import { PNStyles } from '../../styleSheets/DetailPostNewsStyles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { UserContext } from '../../components/users/UserContext';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-paper';
import Postnews from '../Postnews';
import { urlAPI } from '../../components/helpers/urlAPI';

const DetailPostnews = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleImage, setModalVisibleImage] = useState(false);
  const [modalVisibleImageTo, setModalVisibleImageTo] = useState(true);
  const [modalVisibleAddress, setModalVisibleAddress] = useState(false);
  const [categories, setCategories] = useState([]);
  const [idCategory, setIdCategory] = useState('');
  const { navigation, route } = props;
  const { user, setuser } = useContext(UserContext);
  const { params } = route;
  const { _id, name } = params;
  const [idPost, setIdPost] = useState(_id);
  const [namePost, setName] = useState(name);

  // image
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesCount, setSelectedImagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  // postnews
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [details, setDetails] = useState(['']);
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [created_AT, setCreated_AT] = useState('');
  const [files, setFiles] = useState('');
  const [userid, setUserid] = useState('');
  const [brandid, setBrandid] = useState('');
  const [brand, setBrand] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  const [properties, setProperties] = useState('');
  // properties
  const [statusTT, setStatusTT] = useState(''); // tình trạng

  // địa chỉ
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState('');
  const [selectedWard, setSelectedWard] = useState(null);
  const [isWardSelected, setIsWardSelected] = useState(false);
  const handleAddInput = () => {
    setDetails([...details, '']);
  };
  //hiện thông báo nếu chưa chọn địa chỉ
  const showAddressNotification = () => {
    if (!selectedCity || !selectedDistrict || !selectedWard) {
      Alert.alert(
        'Thông báo',
        'Vui lòng chọn tỉnh/thành, quận/huyện và phường/xã trước khi nhập địa chỉ cụ thể.',
      );
    }
  };
  const toggleBottomSheet = () => {
    if (selectedCity && selectedDistrict && selectedWard) {
      const selectedLocation = `${ward},${selectedWard.name}, ${selectedDistrict.name}, ${selectedCity.name}`;
      console.log('tên địa chỉ', selectedLocation);
      setLocation(selectedLocation);
    }
    setModalVisibleAddress(!modalVisibleAddress);
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(
        'https://vnprovinces.pythonanywhere.com//api/provinces/?basic=true&limit=100',
      );
      const data = await response.json();
      setCities(data.results);
      // console.log('City', data.results);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };
  const fetchDistricts = async cityCode => {
    try {
      const response = await fetch(
        `https://vnprovinces.pythonanywhere.com/api/provinces/${cityCode}`,
      );
      const data = await response.json();
      setDistricts(data.districts);
      // console.log('Huyện', data.districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const fetchWards = async districtCode => {
    try {
      const wardResponse = await fetch(
        `https://vnprovinces.pythonanywhere.com/api/districts/${districtCode}`,
      );
      const wardData = await wardResponse.json();
      setWards(wardData.wards);
      // console.log('Ward', wardData);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };
  const ongetBrands = async () => {
    try {
      const brandsData = await getBrands(idPost);
      setBrand(brandsData);
      // console.log('Sản Phẩm :83 >', brandsData);
    } catch (error) {
      console.error('Error getting brands:', error);
    }
  };
  const handleBrandChange = brandId => {
    setSelectedBrandId(brandId);
  };

  useEffect(() => {
    fetchCities(), ongetBrands(), ongetBrands();
    // console.log('slectcity', selectedCity);
    // console.log('District', selectedDistrict);
    // console.log('Ward', selectedWard);
    // console.log('User', user._id);
    // console.log('BrandID', selectedBrandId);
    // console.log('IMAGEPATH', imagePath);
    // console.log('location', location);
  }, [
    idPost,
    name,
    imagePath,
    image,
    modalVisibleImageTo,
    location,
    selectedCity,
    selectedDistrict,
    selectedWard,
    selectedLocation,
    selectedBrandId
  ]);

  const handleTouchableOpacityPress = (newIdPost, newNamePost) => {
    setIdPost(newIdPost);
    setName(newNamePost);
    setModalVisible(false);
  };
  const onRemoveImage = index => {
    const updatedImages = image.filter((_, i) => i !== index);
    setImage(updatedImages);
  };
  const CloseModel = () => {
    if (image.length === 0) {
      setModalVisible(false);
    }
  };
  const CloseModelImage = () => {
    navigation.goBack();
  };
  const ongetCategory = async () => {
    const categories = await getCategory();
    setCategories(categories);
  };
  const ongetDetailCategory = async () => {
    const detailCategory = await getDetailCategory(idCategory);
    setCategories(detailCategory);
  };
  useEffect(() => {
    if (idCategory == null) {
      ongetCategory();
    } else {
      ongetDetailCategory();
    }
  }, [idCategory]);
  const uploadImageToServer = async formData => {
    try {
      const response = await axios.post(
        'https://datnapi.vercel.app/api/postnews/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log('Error uploading image to server:', error);
      return null;
    }
  };

  // nút tiếp tục
  const handleaddImageTocloudiary = async () => {
    const ArrayImagePath = [];
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (var i = 0; i < image.length; i++) {
        formData.append('file', {
          uri: image[i],
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
        const response = await uploadImageToServer(formData);
        ArrayImagePath.push(response.files);
      }
      const uniqueImageLinks = ArrayImagePath.map(images => images[0]);
      setImagePath(uniqueImageLinks);
      // console.log('IMAGEPATH', uniqueImageLinks);
      setIsLoading(false);
    } catch (error) {
      console.log('Error uploading image to server:', error);
    }
  };
  // Add post and image
  const takePhoto = useCallback(async response => {
    if (response.didCancel || response.errorCode || response.errorMessage) {
      return;
    }
    if (response.assets && response.assets.length > 0) {
      const ArrayImage = response.assets.map(asset => asset.uri);
      setImage(ArrayImage);
      setModalVisible(false);
    }
  }, []);

  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);

  const openLibrary = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
      selectionLimit: 5,
    };
    const response = await launchImageLibrary(options, takePhoto);
    if (!response.didCancel) {
      updateSelectedImages(response.assets.length);
    }
  }, []);

  const updateSelectedImages = count => {
    setSelectedImagesCount(count);
  };

  const save = useCallback(async () => {
    if (
      !title ||
      !detail ||
      !price ||
      !statusTT ||
      !brand ||
      !properties ||
      !imagePath
    ) {
      Alert.alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const currentDate = new Date();
    setIsLoading(true);
    try {
      const data = {
        title,
        detail,
        location: location,
        price,
        activable: true,
        role: 'mua',
        created_AT: currentDate,
        files: imagePath,
        userid: user._id,
        brandid: selectedBrandId,
        properties: properties,
        idCategory: idPost,
      };
      const response = await addPostNews(data);
      console.log(response.userid);
      if (response == false) {
        Alert.alert('Thêm thất bại');
      } else {
        // Hiển thị loading trong 3 giây trước khi tắt
        setTimeout(() => {
          Alert.alert('Thêm Thành công');
          // setImagePath(null);
          setTitle('');
          setDetail('');
          setLocation('');
          setPrice('');
          setCreated_AT('');
          setFiles('');
          setStatusTT('');
          setBrand('');
          setBrandid('');
          setIsLoading(false); // Tắt loading
        }, 3000);
      }
    } catch (error) {
      console.log('Error adding post:', error);
      Alert.alert('Có lỗi xảy ra khi thêm tin đăng.');
      setIsLoading(false);
    }

    setIsLoading(false);
  }, [
    imagePath,
    title,
    detail,
    location,
    price,
    created_AT,
    statusTT,
    brand,
    userid,
    brandid,
  ]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={PNStyles.contaitong}
        onPress={() => handleTouchableOpacityPress(item._id, item.name)}>
        <View style={PNStyles.contaiimg}>
          <Image style={PNStyles.img} source={{ uri: `${urlAPI}${item.icon}` }} />
        </View>
        <View style={PNStyles.contaiCity}>
          <Text style={PNStyles.txtCity}>{item.name}</Text>
          <View>
            <Image source={require('../../../image/show-right.png')} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={PNStyles.body}>
      <View style={PNStyles.containerse}>
        <Pressable onPress={CloseModelImage}>
          <Image
            style={PNStyles.icon}
            source={require('../../../image/back.png')}
          />
        </Pressable>
        <Image
          style={PNStyles.iconchotot}
          source={require('../../../image/icon_chotot.jpg')}
        />
      </View>
      <ScrollView>
        <Pressable
          style={PNStyles.presContai}
          onPress={() => setModalVisible(true)}>
          <View style={PNStyles.contaicolum}>
            <View style={PNStyles.contairow}>
              <Text style={PNStyles.txtCate}>Danh mục tin đăng</Text>
            </View>
            <Text style={PNStyles.txtContent}>Đồ điện tử - {namePost}</Text>
          </View>
          <Image
            style={PNStyles.imgDow}
            source={require('../../../image/down.png')}></Image>
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
          {image.length === 0 ? (
            <TouchableOpacity
              style={PNStyles.tcouploadimg}
              onPress={() => setModalVisibleImage(true)}>
              <Image source={require('../../../image/camera_org.png')}></Image>
              <Text style={PNStyles.txtloadimg}>ĐĂNG TỪ 01 ĐẾN 06 HÌNH</Text>
            </TouchableOpacity>
          ) : (
            <View style={PNStyles.contaiModelimageto}>
              <ScrollView
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={PNStyles.tcouploadimgTool}
                  onPress={() => setModalVisibleImage(true)}>
                  <Image
                    source={require('../../../image/camera_org.png')}></Image>
                  <Text style={PNStyles.txtloadimgtool}>Thêm hình</Text>
                </TouchableOpacity>
                {image.map((uri, index) => (
                  <View key={index} style={PNStyles.bodyimageto}>
                    <Pressable
                      style={PNStyles.btnTool}
                      onPress={() => onRemoveImage(index)}>
                      <Image
                        style={PNStyles.icon}
                        source={require('../../../image/icon_cross.png')}
                      />
                    </Pressable>
                    <Image style={PNStyles.imgTool} source={{ uri }}></Image>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
          <TouchableOpacity style={PNStyles.tcouploadimg}>
            <Image source={require('../../../image/video_org.png')}></Image>
            <Text style={PNStyles.txtloadimg}>ĐĂNG ĐA 01 VIDEO</Text>
            <Text style={PNStyles.txtThang}>
              BẠN ĐÃ ĐĂNG 0/10 VIDEO TRONG THÁNG
            </Text>
          </TouchableOpacity>
          <TextInput
            value={statusTT}
            onChangeText={setStatusTT}
            placeholder="Tình trạng"
            style={PNStyles.inputTT}
          />
          <View style={PNStyles.picker}>
            <Dropdown
              style={{
                width: '100%',
                // height: 50,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                height: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
                borderColor: '#ebebeb',
                borderWidth: 1,
                borderRadius: 5,
              }}
              placeholderStyle={PNStyles.placeholderStyle}
              selectedTextStyle={PNStyles.selectedTextStyle}
              inputSearchStyle={PNStyles.inputSearchStyle}
              iconStyle={PNStyles.iconStyle}
              data={brand}
              // maxHeight={300}
              labelField="nameBrand" // Change "label" to "name"
              valueField="_id" // Change "value" to "code"
              placeholder="Hãng"

              value={selectedBrandId} // Use selectedCity as the value
              onChange={selectedBrandId => {
                setSelectedBrandId(selectedBrandId._id);
              }}
            />
            {/* <Picker
            selectedValue={selectedBrandId}
            onValueChange={(itemValue, itemIndex) =>
              handleBrandChange(itemValue)
            }>
            {brand.map(brand => (
              <Picker.Item
                key={brand._id}
                label={selectedBrandId != null ? brand.nameBrand :"Hãng"}
                value={brand._id}
              />
            ))}
          </Picker> */}
          </View>
          <TextInput
            value={price}
            onChangeText={setPrice}
            placeholder="Giá bán"
            style={PNStyles.inputTT}
          />
        </View>
        <View style={PNStyles.viewtile}>
          <Text style={PNStyles.txtTT}>TIÊU ĐỀ TIN ĐĂNG VÀ MÔ TẢ CHI TIẾT</Text>
        </View>
        <View style={PNStyles.contaiupload}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Tiêu đề tin đăng"
            style={PNStyles.inputTT}
          />
          <TextInput
            value={detail}
            onChangeText={setDetail}
            multiline={true}
            underlineColorAndroid='transparent'

            placeholder="Mô tả chi tiết"
            style={PNStyles.inputTTMT}
          />
          <TextInput
            value={properties}
            multiline={true}
            underlineColorAndroid='transparent'
            onChangeText={setProperties}
            placeholder="Thêm chi tiết"
            style={PNStyles.inputTTMT}
          />
        </View>

        <View style={PNStyles.viewtile}>
          <Text style={PNStyles.txtTT}>THÔNG TIN NGƯỜI BÁN</Text>
        </View>
        <View style={PNStyles.contaiupload}>
          <Pressable
            style={PNStyles.presAddres}
            onPress={() => {
              setModalVisibleAddress(true);
            }}>
            <View style={PNStyles.contaicolum}>
              <Text>{location === '' ? 'Địa chỉ' : location}</Text>
            </View>
            <Image
              style={PNStyles.imgDow}
              source={require('../../../image/down.png')}></Image>
          </Pressable>
        </View>

        {/* <View>
          {details.map((detail, index) => (
            <View key={index} style={PNStyles.viewTIP}>
              <Dropdown
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                searchPlaceholder="Search..."
                style={PNStyles.drop2}
              />
              <TextInput
                value={detail}
                onChangeText={text => {
                  const newDetails = [...details];
                  newDetails[index] = text;
                  setDetails(newDetails);
                }}
                multiline
                numberOfLines={4}
                maxLength={40}
                placeholder="Mô tả chi tiết"
                style={PNStyles.inputTTMT}
              />
            </View>
          ))}
        </View> */}
        {/* <Pressable style={PNStyles.btnXT}>
          <Text style={PNStyles.txtXT} onPress={handleAddInput}>
            Thêm input
          </Text>
        </Pressable> */}
        <View style={PNStyles.contaiBtn}>
          <Pressable style={PNStyles.btnXT}>
            <Text style={PNStyles.txtXT}>XEM TRƯỚC</Text>
          </Pressable>
          <Pressable style={PNStyles.btnDT} onPress={save}>
            <Text style={PNStyles.txtDT}>ĐĂNG TIN</Text>
          </Pressable>
        </View>
      </ScrollView>
      {modalVisible && <View style={PNStyles.overlay} />}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={PNStyles.centeredView}>
          <View style={PNStyles.modalView}>
            <View style={PNStyles.Container}>
              <View style={PNStyles.contaiappbar}>
                <Pressable onPress={CloseModel}>
                  <Image source={require('../../../image/close.png')} />
                </Pressable>
                <View style={PNStyles.contaitxt}>
                  <Text style={PNStyles.txtTille}>Chọn danh mục</Text>
                </View>
              </View>
              <View style={PNStyles.contaitxp}>
                <Image source={require('../../../image/searchBar.png')} />
                <TextInput
                  placeholder="Nhập từ khóa để lọc"
                  placeholderTextColor={'#9C9C9C'}
                  style={PNStyles.txpserch}></TextInput>
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
      {modalVisibleImage && <View style={PNStyles.overlay} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleImage}>
        <View style={PNStyles.centeredView}>
          <View style={PNStyles.modalView}>
            <View style={PNStyles.viewModel2}>
              <Pressable onPress={() => setModalVisibleImage(false)}>
                <Image source={require('../../../image/close.png')} />
              </Pressable>
              <Text style={PNStyles.txtGDMD}>Gần đây</Text>
              <View style={PNStyles.viewMD}>
                <Pressable onPress={openLibrary}>
                  <Image
                    style={PNStyles.imgpicture}
                    source={require('../../../image/picture.png')}
                  />
                </Pressable>
                <Text>{`Đã chọn ${image.length}/5`}</Text>
              </View>
            </View>
            {isLoading ? (
              <ActivityIndicator
                style={PNStyles.loadingIcon}
                size="large"
                color="#3498db"
              />
            ) : (
              <View style={PNStyles.viewROW}>
                <TouchableOpacity
                  style={PNStyles.tcouploadimg2}
                  onPress={openCamera}>
                  <Image
                    source={require('../../../image/camera_org.png')}></Image>
                  <Text style={PNStyles.txtloadimg2}>Chụp hình</Text>
                </TouchableOpacity>
                {image.length > 0 ? (
                  <TouchableOpacity
                    style={PNStyles.viewImage}
                    onPress={openLibrary}
                    disabled={selectedImages.length >= 5}>
                    <Image
                      style={PNStyles.imgSelect}
                      source={{ uri: image[0] }}></Image>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={PNStyles.viewImage}></TouchableOpacity>
                )}
              </View>
            )}
            <View style={PNStyles.viewAl}>
              <Pressable
                style={PNStyles.btnModelTT}
                onPress={() => {
                  handleaddImageTocloudiary();
                  setModalVisibleImage(false);
                }}>
                <Text style={PNStyles.txtModelTT}>Tiếp tục</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {modalVisibleAddress && <View style={PNStyles.overlay} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddress}>
        <View style={PNStyles.centeredView}>
          <View style={PNStyles.modalView}>
            <View style={PNStyles.containerModelAddress}>
              <Pressable
                onPress={() => {
                  setModalVisibleAddress(false);
                }}>
                <Image
                  style={PNStyles.icon}
                  source={require('../../../image/close.png')}
                />
              </Pressable>
              <Text style={PNStyles.txtModelAdress}>Địa chỉ</Text>
            </View>
            <View style={PNStyles.contaiupModeladdress}>
              <View style={PNStyles.contDialog}>
                <Dropdown
                  style={PNStyles.dropdown}
                  placeholderStyle={PNStyles.placeholderStyle}
                  selectedTextStyle={PNStyles.selectedTextStyle}
                  inputSearchStyle={PNStyles.inputSearchStyle}
                  iconStyle={PNStyles.iconStyle}
                  data={cities}
                  search
                  maxHeight={300}
                  labelField="name" // Change "label" to "name"
                  valueField="id" // Change "value" to "code"
                  placeholder="Tỉnh/Thành phố*"
                  searchPlaceholder="Tìm kiếm..."
                  value={selectedCity} // Use selectedCity as the value
                  onChange={city => {
                    setSelectedCity(city);
                    fetchDistricts(city.id);
                  }}
                />
                <Dropdown
                  style={PNStyles.dropdown}
                  placeholderStyle={PNStyles.placeholderStyle}
                  selectedTextStyle={PNStyles.selectedTextStyle}
                  inputSearchStyle={PNStyles.inputSearchStyle}
                  iconStyle={PNStyles.iconStyle}
                  data={districts}
                  search
                  maxHeight={300}
                  labelField="name" // Change "label" to "name"
                  valueField="id" // Change "value" to "code"
                  placeholder="Quận/huyện*"
                  searchPlaceholder="Tìm kiếm..."
                  value={selectedDistrict} // Use selectedCity as the value
                  onChange={districts => {
                    setSelectedDistrict(districts);
                    fetchWards(districts.id);
                  }}
                />
                <Dropdown
                  style={PNStyles.dropdown}
                  placeholderStyle={PNStyles.placeholderStyle}
                  selectedTextStyle={PNStyles.selectedTextStyle}
                  inputSearchStyle={PNStyles.inputSearchStyle}
                  iconStyle={PNStyles.iconStyle}
                  data={wards}
                  search
                  maxHeight={300}
                  labelField="name"
                  valueField="id"
                  placeholder="Phường, xã, thị trấn"
                  searchPlaceholder="Tìm kiếm..."
                  value={selectedWard}
                  onChange={ward => {
                    setIsWardSelected(true);
                    setSelectedWard(ward);
                  }}
                />

                <View style={PNStyles.contAddres}>
                  <TouchableOpacity onPress={showAddressNotification}>
                    <TextInput
                      editable={isWardSelected}
                      style={PNStyles.inputWard}
                      placeholder="Địa chỉ cụ thể"
                      value={ward}
                      onChangeText={text => setWard(text)}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={toggleBottomSheet}
                style={PNStyles.bottomSheetCloseButton}>
                <Text style={PNStyles.bottomSheetCloseButtonText}>Xong</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailPostnews;
