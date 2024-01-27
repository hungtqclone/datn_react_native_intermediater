import { StyleSheet } from 'react-native'


export const JobStyles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E8E8E8',
    },
    containerse: {
        width: '100%',
        height: '10%',
        backgroundColor: "#FFBF17",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-around',
        padding: 10,
    },
    viewSearch: {
        position: 'relative',
        alignItems: 'center',
        width: '80%',
        height: '100%',
        flexDirection: 'row',

    },
    txpSearch: {
        backgroundColor: "white",
        width: '100%',
        borderRadius: 5,
        paddingLeft: 50,
        position: 'absolute'
    },
    imgSearch: {
        position: 'absolute',
        margin: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    contaiBanner: {
        height: 100,
        backgroundColor: 'white',
    },
    contaiBannerFla: {
        width: '100%',
    },
    contaiCarousel: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
    },
    // title dưới slide:
    contaiBannertong: {
        backgroundColor: 'white',
        marginVertical: 10,
        paddingTop: 10,

    },
    txttitleKP: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    contaiTitle: {
        marginVertical: 20,
        padding: 1,
        width: 100,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgTitle: {
        width: 60,
        height: 60
    },
    txtTitle: {
        textAlign: 'center',
        color: 'black'

    },
    txtViewAll: {
        color: '#306BD9',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 20,
        textAlign: 'center'
    },
    // danh mục gói nhả tuyển dụng
    contaiPaket: {
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 10,
    },
    bodytop: {
        width: '100%',
        color: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    PresBody: {
        width: '78%',
        color: 'red',
        flexDirection: 'column',
    },
    txthomejob: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    txttitlejob: {
        fontSize: 15, color: 'grey',
    },
    img: { width: 60, height: 60, marginRight: 10 },
    imgJob: { width: 10, height: 10 },
    bodybottom:{
        flexDirection: 'row',
        width:'100%',
        padding:10,
        alignItems: 'center',
        justifyContent:'space-between',
    },

    // VIP
    contaiTitleVIP: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,

    },
    imgTitleVIP: {
        width: 150,
        height: 70,
        borderRadius: 10,
    },
    txtAll: {
        color: '#306BD9'
    },
});