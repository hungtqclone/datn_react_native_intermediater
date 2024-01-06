import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Appbar, FAB, MD3Colors, Icon, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
const DetailProduct = (props) => {
  //navigation
  const { navigation, rating, totalReviews } = props

  const data = [
    { id: '1', question: 'Món hàng này còn không?' },
    { id: '2', question: 'Bạn có ship hàng không?' },
    { id: '3', question: 'Sản phẩm còn bảo hành không?' },
    { id: '4', question: 'Sản phẩm đã qua sửa chữa chưa?' },
    { id: '5', question: 'Có phụ kiện đi kèm theo sản phẩm?' },
  ];
  const horizontalData = [
    { id: '1', name: 'Product 1', price: '1,000,000 đ', time: '1 hour ago', image: require('../assets/images/imgProduct.png') },
    { id: '2', name: 'Product 2', price: '2,500,000 đ', time: '2 hours ago', image: require('../assets/images/imgProduct.png') },
    { id: '3', name: 'Product 1', price: '1,000,000 đ', time: '1 hour ago', image: require('../assets/images/imgProduct.png') },
    { id: '4', name: 'Product 2', price: '2,500,000 đ', time: '2 hours ago', image: require('../assets/images/imgProduct.png') },
   
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.question}</Text>
    </View>
  );
  return (
    <View style={styles.body}>
      <View style={styles.appbar}>
        <TouchableOpacity style={styles.imgBack} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/icons/back.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgShare} onPress={() => console.log("share")}>
          <Image source={require('../assets/images/icons/iconShare.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgHeart} onPress={() => console.log("heart")}>
          <Image source={require('../assets/images/icons/heart.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bacham} onPress={() => console.log("bacham")}>
          <Image source={require('../assets/images/icons/icon_bacham.jpg')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/images/imgProduct.png')} style={styles.product} />
        </View>
        <View style={styles.nameProduct}>
          <Text style={styles.txtNameProduct}>SAMSUNG GALAXY S6 EDGE </Text>
        </View>
        <View style={styles.price}>
          <View>
            <Text style={styles.textprice}> 5.190.000 đ </Text>
            <Text style={styles.timeIn}>57 phút trước</Text>
          </View>
          <View style={styles.containerPrice}>
            <Image style={styles.iconLike} source={require('../assets/images/icons/iconLike.png')} />
            <Text style={styles.txtLuutin}>Lưu tin</Text>
          </View>
        </View>
        <View style={styles.infoNguoiban}>
          <View style={styles.center}>
            <View style={styles.info}>
              <View style={styles.name}>
                <View style={styles.infoAv}>
                  <Image source={require('../assets/images/avatarDetail.png')} style={styles.avt} />
                  <View>
                    <Text style={styles.nameNguoiban}>Hiếu Android Shop</Text>
                    <View style={styles.reviewContainer}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={rating}
                        starSize={20}
                        fullStarColor={'orange'}
                        emptyStarColor={'gray'}
                      />
                      <Text >4.9</Text>
                      <Text style={styles.reviewText}>{`(${totalReviews})`}</Text>
                    </View>
                    <View style={styles.dotOnl}>
                      <View style={styles.dot} />
                      <Text style={styles.txtOnl}>Đang hoạt động</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.containerXemtrang}>
                  <Text style={styles.txtXemtrang}>
                    Xem trang
                  </Text>
                </View>
              </View>

            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.followButton}>
                {/* <Ionicons name="add" size={20} color="white" /> */}
                <Image source={require('../assets/images/icons/icon_add.png')} style={styles.icons} />
                <Text style={styles.folowtext}>Theo dõi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewStoreButton}>
                {/* <FontAwesome name="shopping-bag" size={20} color="white" /> */}
                <Image source={require('../assets/images/icons/icon_store.png')} style={styles.icons} />
                <Text style={styles.viewtext}>Xem cửa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.decriptionPr}>
          <View style={styles.contDesc}>
            <Text style={styles.titleDecs}>Mô tả</Text>
          </View>
          <View style={styles.contentDecs}>
            <Text>-Bán note 8 bản hàn sử dụng tốt k lỗi lầm gì từ lúc mua tới giờ</Text>
            <Text>-Còn hộp sách đầy đủ</Text>
            <Text>-Viền tróc sơn ít do dùng lâu</Text>
            <Text>-Bao test nước</Text>
            <Text>-Mình còn dư bộ dán màn hình bác nào mua mình tặng luôn</Text>
            <Text>-Cấu hình thì ae tra google giúp em nhé ,tks mọi người</Text>
          </View>

        </View>
        <View style={styles.infoProduct}>
          <View style={styles.contTitleInfo}>
            <Text>
              Thông tin sản phẩm
            </Text>
          </View>
          <View style={styles.detailInfoProduct}>
            <View style={styles.col1}>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconTag.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct}>Hãng:</Text>
                <Text style={styles.textdetailInfoProduct}>Apple</Text>
              </View>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconTag2.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct} >Dòng máy:</Text>
                <Text style={styles.textdetailInfoProduct}>Iphone 6</Text>
              </View>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconProtect.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct}>Tình trạng bảo hành: Còn bảo hành</Text>
                <Text style={styles.textdetailInfoProduct}></Text>
              </View>
            </View>
            <View style={styles.col2}>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconColor.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct}>Màu sắc:</Text>
                <Text style={styles.textdetailInfoProduct}>Vàng</Text>
              </View>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconPaper.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct}>Tình trạng: Đã sử dụng (Chưa sửa chữa)</Text>
                <Text style={styles.textdetailInfoProduct}></Text>
              </View>
              <View style={styles.row}>
                <Image source={require('../assets/images/icons/iconData.png')} style={styles.image} />
                <Text style={styles.textdetailInfoProduct}>Dung lượng:</Text>
                <Text style={styles.textdetailInfoProduct}>64 GB</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.ask}>Hỏi người bán qua chat</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={styles.ask}>Khu vực</Text>
          <Text style={styles.adress}>Phường Ngã Tư Xã, Quận Đống Đa, Hà Nội</Text>
        </View>
        <View style={styles.rp}>
          <TouchableOpacity style={styles.rpbutton}>
            {/* <Ionicons name="add" size={20} color="white" /> */}
            <Text style={styles.rptext}>Báo tin đã bán</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rpbutton}>
            {/* <FontAwesome name="shopping-bag" size={20} color="white" /> */}
            <Text style={styles.rptext}>Báo tin không hợp lệ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pushbt}>
          <Text style={styles.pushtext}>Đăng nhanh - Bán gọn</Text>
        </View>
        <View style={styles.share}>
          <Text style={styles.sharetext}>Chia sẽ tin đăng này cho bạn bè</Text>
          <View style={styles.listIcons}>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_fb.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_zalo.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_mess.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_whatapp.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_sms.jpg')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconimg}>
              <Image source={require('../assets/images/icons/icon_link.jpg')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.newdiff1}>
          <Text style={styles.diferrence}>Tin rao khác của Hiếu Android Shop</Text>
          <TouchableOpacity style={styles.btnviewall}>
            <Text style={styles.textviewall}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={horizontalData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.horizontalItem}>
                <Image source={item.image} style={styles.horizontalImage} />
                <Image source={require('../assets/images/icons/like.png')} style={styles.icontim} />
                <Text style={styles.tagpro}>Thanh toán đảm bảo</Text>
                <View style={styles.horizontalTextContainer}>
                  <Text style={styles.horizontalname}>{item.name}</Text>
                  <Text style={styles.horizontalrice}>{item.price}</Text>
                  <Text style={styles.horizontaltime}>{item.time}</Text>
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.newdiff}>
          <Text style={styles.diferrence}>Tin đăng tương tự</Text>
          <TouchableOpacity style={styles.btnviewall}>
            <Text style={styles.textviewall}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={horizontalData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.horizontalItem}>
                <Image source={item.image} style={styles.horizontalImage} />
                <Image source={require('../assets/images/icons/like.png')} style={styles.icontim} />
                <Text style={styles.tagpro}>Thanh toán đảm bảo</Text>
                <View style={styles.horizontalTextContainer}>
                  <Text style={styles.horizontalname}>{item.name}</Text>
                  <Text style={styles.horizontalrice}>{item.price}</Text>
                  <Text style={styles.horizontaltime}>{item.time}</Text>
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.containerbottomtab}>
        <TouchableOpacity style={styles.bottomtab} onPress={() => console.log('Call pressed')}>
          <Image source={require('../assets/images/icons/icon_call.png')} style={styles.iconc} />
          <Text style={styles.textcall}>Gọi điện</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomtab} onPress={() => console.log('Text pressed')}>
          <Image source={require('../assets/images/icons/icon_sms.jpg')} style={styles.iconc} />
          <Text style={styles.textcall}>Nhắn tin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomtab} onPress={() => console.log('Check pressed')}>
          <Image source={require('../assets/images/icons/icon_chat.png')} style={styles.iconc} />
          <Text style={styles.textcall}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomtabmua} onPress={() => console.log('Buy pressed')}>
          <Text style={styles.textmuangay}>Mua ngay</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    position: "relative",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBack: {
    top: 20,
    backgroundColor: '#fff',
    left: 20,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imgHeart: {
    position: "absolute",
    right: 70,
    top: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bacham: {
    flexDirection: 'row',
    position: "absolute",
    right: 20,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgShare: {
    position: "absolute",
    right: 120,
    top: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameProduct: {
   paddingHorizontal: 10,
    borderRadius: 10,
  },
  txtNameProduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  priceAndSave: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  saveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  saveText: {
    fontSize: 14,
  },

  catelory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoNguoiban: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    
  },
  textprice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
 
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtLuutin: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  iconPrice: {
    width: 5,
    height: 5,
    padding: 10,
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 25,
    padding: 5,
  },
  timeIn: {
    fontSize: 8,
    color: 'black',
  },
  dungluong: {
    padding: 5,
    backgroundColor: '#FF5C01',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  baohanh: {
    padding: 5,
    backgroundColor: '#FFD428',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  game: {
    padding: 5,
    backgroundColor: '#68C0FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  phukien: {
    padding: 5,
    backgroundColor: '#C1DBE3',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tragop: {
    padding: 5,
    backgroundColor: '#5AED69',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  cauhinh: {
    padding: 5,
    backgroundColor: '#73EEDC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  dactinh: {
    padding: 5,
    backgroundColor: '#F1F2F3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  catelory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  infoNguoiban: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  txtOnl: {
    fontSize: 13,
  },
  containerXemtrang: {
    padding: 5,
    borderRadius: 15,
    borderColor: 'orange',
    borderWidth: 1,
  },
  dotOnl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtXemtrang: {
    fontSize: 8,
    color: 'orange'
  },
  botDetailNGuoiban: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contBanchuyen: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contDanhgia: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contPhanhoi: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  gachDung: {
    width: 1,
    height: 50,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  decriptionPr: {
    marginBottom: 10,
  },
  contDesc: {
    marginBottom: 10,
  },
  titleDecs: {
    fontSize: 15,
    fontWeight: 'normal', // Change 'Nomal' to 'normal'
    backgroundColor: '#FFEB4D',
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,

  },
  contentDecs: {
    padding: 10,
    fontSize: 12,
  },
  infoProduct: {
    marginBottom: 10,
  },
  detailInfoProduct: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F2F3',
  },
  col1: {
    padding: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    width: "50%",

  },
  col2: {
    padding: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    width: "50%",
  },
  contTitleInfo: {
    marginBottom: 10,
    backgroundColor: '#FFEB4D',
    width: 200,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  textdetailInfoProduct: {
    fontSize: 8,
    fontWeight: 'normal',
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  info: {
    justifyContent: 'space-between',
    width: '100%',
    height: "auto",
    padding: 20,
    borderTopWidth: 0.5, // Set the border width
    borderTopColor: '#ccc',
    marginLeft: 5,
    marginRight: 5,
  },
  infoAv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avt: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  product: {
    width: "100%",
    height: 300,
  },
  center: {
    width: '100%',
    alignItems: 'center',
  },
  iconLike: {
    marginHorizontal: 5,
  },
  appbar: {
    backgroundColor: '#FFCC00',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  icon: {
    backgroundColor: '#FFCC00',
    width: 28,
    height: 26,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  followButton: {
    marginHorizontal: 10,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  viewStoreButton: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomtab: {
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 1,
  },
  containerbottomtab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomtabmua: {
    backgroundColor: 'green',
    alignItems: 'center',
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textcall: {
    color: 'black',
    fontSize: 12,
  },
  textmuangay: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewtext: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  folowtext: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ask: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  item: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 0.5,
    margin: 5,
  },
  adress: {
    fontSize: 12,
    fontWeight: 'normal',
    margin: 10,
    color: 'black',
  },
  rp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    padding: 10,
  },
  rpbutton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  rptext: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  pushbt: {
    backgroundColor: '#FFCC00',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  pushtext: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sharetext: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    color: 'gray',
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  listIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  newdiff1: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    borderTopColor: '#C0C0C0',
    borderTopWidth: 20,
  },
  newdiff: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diferrence: {
    width: '60%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  btnviewall: {
    width: '40%',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textviewall: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue'
  },
  horizontalItem: {
    flexDirection: 'column',
    padding: 5,
    borderBottomWidth: 20,
    borderBottomColor: '#C0C0C0',
  },
  horizontalImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    position: 'relative',
  },
  horizontalTextContainer: {
    flex: 1,
  },
  horizontalname: {
    fontSize: 12,
    marginBottom: 5,
    color: 'black',
  },
  horizontalrice: {
    fontSize: 12,
    marginBottom: 5,
    color: 'red',
  },
  horizontaltime: {
    fontSize: 8,
    marginBottom: 5,
    color: 'gray',
  },
  icontim: {
    width: 10,
    height: 10,
    position: 'absolute',
    bottom: 90,
    right: 15,
  },
  tagpro: {
    position: 'absolute',
    bottom: 85,
    left: 10,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 1,
    fontSize: 5,
    fontWeight: 'bold',
    color: 'white',
    width: 50,
  },
  iconc: {
    width: 30,
    height: 30,
  },
  icons: {
    width: 20,
    height: 20,
    margin: 5
  },
  nameNguoiban: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },

})