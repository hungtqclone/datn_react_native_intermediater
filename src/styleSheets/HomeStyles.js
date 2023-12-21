import { StyleSheet } from 'react-native'


export const homeStyles = StyleSheet.create({
    viewSearch: {
        padding: 20, backgroundColor: "#FFBF17"
    },
    textInputSearch: {
        backgroundColor: "white", borderRadius: 5, paddingHorizontal: 10, fontSize: 16, height: 40
    },
    imgSearch: {
        position: "absolute", top: 30, right: 30

    },
    Sinhvien: {
        width: "100%", height: 122, backgroundColor: "#FFBF17", paddingHorizontal: 20
    },
    Khampha: {
        width: "100%", height: 40, backgroundColor: "#FFBF17", marginTop: "5%", paddingHorizontal: 20
    },
    KhamphaDanhMuc: {
        width: "100%", borderRadius: 5, backgroundColor: "#FFF", marginTop: "4%", height: 37,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5.14,

        elevation: 3,
    },
    imageSinhvien: {
        width: "100%", height: 111, borderRadius: 5
    },
    textKhampha: {
        color: "#242A37", fontSize: 15, textAlign: "center", padding: 7, fontWeight: "600"
    },
    imageBatdongsan: {
        width: "100%", height: 95, marginTop: "5%"
    },
    textBatdongsan: {
        color: "#FFF", fontSize: 15, marginTop: "-20%", left: 25, fontWeight: "bold"
    },
    imageXehoi: {
        width: "100%", height: 95, marginTop: "18%"
    },
    textXeco: {
        color: "#FFF", fontSize: 15, left: 25, fontWeight: "bold", position: "absolute", top: "50%"
    },
    ChuyenCanh: {
        width: "100%", minHeight: 300, paddingVertical: 20, flexDirection: 'row'
    },
    ViewCon: {
        flex: 1, justifyContent: 'center', alignItems: "center", marginRight: 20
    },
    DoDienTu: {
        width: "100%"
    },
    ThuCung: {
        marginTop: 10, width: "100%"
    },
    textDodientu: {
        position: "absolute", top: "10%", left: "5%", fontSize: 13, color: "#FFF", fontWeight: "500"
    },
    ViewCon1: {
        flex: 1, justifyContent: 'center', alignItems: "center"
    },
    textThuCung: {
        position: "absolute", flex: 1, top: "60%", left: "5%", fontSize: 13, color: "#FFF", fontWeight: "500"
    },
    textVieLam: {
        position: "absolute", top: "10%", left: "55%", fontSize: 13, color: "#FFF", fontWeight: "500"
    },
    textNoiThat: {
        position: "absolute", top: "60%", left: "55%", fontSize: 13, color: "#FFF", fontWeight: "500"
    },
    Search: {
        width: "100%", height: 70, flexShrink: 0, backgroundColor: "#FFBF17", paddingHorizontal: 20
    },
    Search1: {
        width: "100%", height: 40, flexShrink: 0, backgroundColor: "#FDFDFD", borderRadius: 5, marginTop: "4%"
    },
    Text: {
        color: "#888", fontSize: 16, fontFamily: "Roboto", fontWeight: 400, marginTop: "3%", left: "6%"
    }
    , Search2: {
        width: 20, height: 20, marginTop: "-6%", left: "90%"
    },

})

