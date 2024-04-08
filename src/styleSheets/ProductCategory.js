import { StyleSheet } from 'react-native'
export const Product = StyleSheet.create({
    Container: {
        width: "100%", backgroundColor: '#F1F2F6',
        height: "100%",
    },
    contaiappbar: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        // padding:30,
        backgroundColor: '#FFBF17',
        alignItems: 'center'
    },
    pres: {
        marginLeft: 10,
    },
    txtTille: {
        color: '#484D56',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Roboto'
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
    // MOdel 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Màu nền mờ với độ trong suốt 50%
        zIndex: 1 // Đảm bảo nằm trên mọi phần tử khác trên màn hình
    }
})
