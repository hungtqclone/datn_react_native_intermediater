import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const DetailProduct = () => {
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/images/imgProduct.png')} style={styles.product} />
          <View style={styles.imgBack}>
            <Image source={require('../assets/images/icons/back.png')} style={styles.image} />
          </View>
          <View style={styles.imgShare}>
            <Image source={require('../assets/images/icons/iconShare.png')} style={styles.share} />
          </View>
          <View style={styles.imgHeart}>
            <Image source={require('../assets/images/icons/heart.png')} style={styles.image} />
          </View>
        </View>
        <View style={styles.nameProduct}>
          <Text style={styles.txtNameProduct}>SAMSUNG GALAXY S6 EDGE </Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.textprice}> 5.190.000 đ </Text>
          <View style={styles.containerPrice}>
            <Image style={styles.iconLike} source={require('../assets/images/icons/iconLike.png')}  />
            <Text style={styles.txtLuutin}>Lưu tin</Text>
          </View>
        </View>
        <View >
          <Text style={styles.timeIn}>57 phút trước</Text>
        </View>
        <View style={styles.catelory}>
          <View style={styles.dungluong}>
            <Text>Dung lượng cao</Text>
          </View>
          <View style={styles.baohanh}>
            <Text>Bảo hành</Text>
          </View>
          <View style={styles.game}>
            <Text>Game</Text>
          </View>
          <View style={styles.phukien}>
            <Text>Phụ kiện</Text>
          </View>
          <View style={styles.tragop}>
            <Text>Trả góp</Text>
          </View>
          <View style={styles.cauhinh}>
            <Text>Cấu hình</Text>
          </View>
          <View style={styles.dactinh}>
            <Text>+</Text>
            <Text>2 đặc tính</Text>
          </View>
        </View>
        <View style={styles.infoNguoiban}>

          <View style={styles.center}>
            <View style={styles.info}>
              <View style={styles.name}>
                <View style={styles.infoAv}>
                  <Image source={require('../assets/images/avatarDetail.png')} style={styles.avt} />
                  <Text style={styles.nameNguoiban}>Tuấn</Text>
                  <View style={styles.dotOnl}>
                    <View style={styles.dot} />
                    <Text style={styles.txtOnl}>Hoạt động 3 ngày trước</Text>
                  </View>
                </View>
                <View style={styles.containerXemtrang}>
                  <Text style={styles.txtXemtrang}>
                    Xem trang
                  </Text>
                </View>
              </View>
              
            </View>
            <View style={styles.botDetailNGuoiban}>
                <View style={styles.contBanchuyen}>
                  <Text>
                    Bán chuyên
                  </Text>
                  <Image source={require('../assets/images/icons/iconBalo.png')} />
                </View>
                <View style={styles.gachDung} />
                <View style={styles.contDanhgia}>
                  <Text>Đánh giá</Text>
                  <Text>- - -</Text>
                </View>
                <View style={styles.gachDung} />
                <View style={styles.contPhanhoi}>
                  <Text>Phản hồi</Text>
                  <Text>Thỉnh thoảng</Text>
                </View>
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
      </ScrollView>

    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 10,
    color: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    color: '#000',
  },
  header: {
    position: "relative",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  imgBack: {
    top: 20,
    backgroundColor: '#fff',
    left: 20,
    position: "absolute",
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imgHeart: {
    flexDirection: 'row',
    position: "absolute",
    right: 10,
    top: 20,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

  },
  imgShare: {
    position: "absolute",
    width: 30,
    height: 30,
    marginHorizontal: 5,
    right: 60,
    top: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  nameProduct: {
    backgroundColor: '#F1F2F6',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  txtNameProduct: {
    fontSize: 15,
    fontWeight: 'bold',
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
  timeIn: {
    marginBottom: 10,
  },
  catelory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoNguoiban: {
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
    marginLeft: 10,
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
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  txtOnl: {
    fontSize: 8,
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
    height: "auto"
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

})