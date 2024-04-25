import { StyleSheet } from 'react-native'


export const PNStyles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    containerse: {
        width: '100%',
        height: 50,
        backgroundColor: "#FFBF17",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-around',
        padding: 10,
    },
    iconchotot: {
        marginLeft: 100,
        width: 100,
        height: 50,
    },
    presContai: {
        borderRadius: 5,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'grey',
        alignContent: 'space-between',
        margin: 10,
        marginBottom: 20,
    },
    contaicolum: {
        padding: 10,
        width: '93%',
        flexDirection: 'column',
    },
    contairow: {
        flexDirection: 'row',
    },
    imgDow: {
        width: 15,
        height: 15,
    },
    txtCate: {
        fontSize: 13,

    },
    txtContent: {
        fontSize: 16,
        color: 'black'
    },
    viewtile: {
        padding: 10,
        flexDirection: 'column',
        backgroundColor: '#F4F4F4',
    },
    viewrow: {
        flexDirection: 'row',
    },
    txtTT: {
        fontSize: 16,
        color: 'grey'
    },
    txtQD: {
        color: 'blue',
    },

    contaiupload: {
        padding: 10,
        width: '100%',

    },
    tcouploadimg: {
        marginTop: 15,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#FF8800'
    },
    txtloadimg: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    txtThang: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputTT: {
        marginTop: 10,
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 0.5,
    },
    inputTTMT: {
        marginTop: 15,
        width: '100%',
        maxHeight: 100,
        borderRadius: 5,
        borderWidth: 0.5,
    },
    presAddres: {
        borderRadius: 5,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'grey',
        alignContent: 'space-between',
    },

    contaiBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        marginVertical: 10,
    },
    btnXT: {
        width: '47%',
        borderWidth: 0.5,
        borderColor: '#FF8800',
        borderRadius: 5,
    },
    btnDT: {
        width: '47%',
        backgroundColor: '#FF8800',
        borderRadius: 5,

    },
    txtXT: {
        textAlign: 'center',
        padding: 10,
        color: '#FF8800'
    },
    txtDT: {
        textAlign: 'center',
        padding: 10,
        color: 'white'

    },
    // MOdel 
    centeredView: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
    },
    // POsst
    Container: {
        width: "100%", backgroundColor: '#F1F2F6',
        height: "100%",
    },
    contaiappbar: {
        flexDirection: 'row',
        height: 50,
        padding:10,
        backgroundColor: '#FFBF17',
        justifyContent:'space-around'
    },
    txtTille: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
    },

    contaitxt: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    contaitxp: {
        marginBottom: 5,
        flexDirection: 'row',
        width: '100%',
        height: 48,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
    },
    txpserch: {
        width: '100%'
    },
    contaitong: {
        marginBottom: 10,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 4,
        height: 56,
        alignItems: 'center'
    },
    contaiCity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    contaiimg: {
        flexDirection: 'row',
        width: '15%',
        height: 56,
        alignItems: 'center'
    },
    img: {
        width: 30,
        height: 30,
    },
    txtCity: {
        fontFamily: 'Roboto',
        color: '#000000',
        fontSize: 18,
        fontWeight: '400',
    },

    // bottom sheet
    containerbottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainerbottom: {
        flex: 1,
        alignItems: 'center'
    },
    containerHeadlinebottom: {
        fontSize: 24,
        fontWeight: '600',
        padding: 20
    },

    // MOdel Image
    viewModel2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: 15,
    },
    imgpicture: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    txtGDMD: {
        marginLeft: 50,
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    viewMD: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',

    },
    tcouploadimg2: {
        width: '40%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',

    },
    txtloadimg2: {
        color: '#FF8800',
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewImage: {
        marginHorizontal: 5,
        width: '40%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewROW: {
        flexDirection: 'row',
        height: '80%'

    },
    imgSelect: {
        width: 150,
        height: 150,

    },
    btnModelTT: {
        width: '90%',
        backgroundColor: 'grey',
        borderRadius: 3,

    },
    txtModelTT: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontVariant: 'bold'

    },
    viewAl: {
        width: '100%',
        alignContent: 'bottom',
        alignItems: 'center',
    },

    //Model Address
    containerModelAddress: {
        width: '100%',
        height: 50,
        backgroundColor: "#FFBF17",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        padding: 10,
    },
    txtModelAdress: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginLeft: '30%',
    },

    // detail model
    contaiupModeladdress: {
        padding: 10,
        width: '100%',

    },
    tcouploadimg: {
        marginTop: 15,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#FF8800'
    },
    pressAddMD: {
        borderRadius: 5,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'grey',
        alignContent: 'space-between',
    },
    txtAddressDetail: {
        color: 'grey',
        fontSize: 10,
        fontWeight: 'bold',
    },
    txtAddressDetails: {
        color: 'black',
        fontSize: 16,
    },
    inputDCCT: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 0.3,
    },

    // model img toôl
    contaiModelimageto: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    tcouploadimgTool: {
        marginRight: 10,
        width: 100,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#FF8800'
    },
    txtloadimgtool: {
        marginTop: 10,
        fontSize: 14,
        color: '#FF8800'
    },
    imgTool: {
        width: 100,
        height: 100,
    },
    bodyimageto: {
        marginRight: 10,
        position: 'relative',
    },
    btnTool: {
        position: 'absolute',
        zIndex: 1,
        right: -4,
        top: -4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },


    // dropdow
    dropdown: {
        width: '100%',
        margin: 16,
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
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        // height: 40,
        fontSize: 16,
    },
    contAddres: {
        width: '100%',
        height: 60,
        padding: 5,
        marginBottom: 20,
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 20,
    },
    inputWard: {
        borderWidth: 0,
        borderBottomColor: 'transparent', // Đặt màu border thành trong suốt
        borderBottomWidth: 0, // Đặt độ rộng border là 0
        fontSize: 15,
        // width: '90%',
    },
    bottomSheetContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bottomSheetCloseButton: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'silver',
        padding: 10,
        borderRadius: 5,
    },
    bottomSheetCloseButtonText: {
        fontSize: 18,
        color: '#fff',
    },
    contDialog: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    viewTIP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    drop2: {
        width: 100,
    },
    picker: {
        marginTop: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'grey',
    }
});
