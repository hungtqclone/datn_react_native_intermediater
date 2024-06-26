import { StyleSheet } from 'react-native'


export const RLSTtyles = StyleSheet.create({
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
        backgroundColor: 'white'

    },
    txttitleKP: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    contaiTitle: {
        padding: 10,
        width: 100,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgTitle: {
        width: 40,
        height: 40
    },
    txtTitle: {
        textAlign: 'center',
        color: 'black'

    },
    // PacketVIP
    contaiBannertongPK: {
        backgroundColor: 'white',
        paddingVertical: 10,
        marginVertical: 10,

    },
    txttitlePK: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titlePacket: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    pressables: {
        flexDirection: 'row',
    },
    contaiTitleVIP: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,

    },
    imgTitleVIP: {
        width: 120,
        height: 60,
        borderRadius: 10,
    },
    txtAll: {
        color: '#306BD9'
    },
    // product
    contaiProduct: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        alignItems: 'center',
    },

    productBody: {
        padding: 10,
        width: 180,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderColor: '#DCDCDC'
    },
    imgproduct: {
        width: '100%',
        height: 175,
        padding: 2
    },
    txtTitleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingLeft: 10,
        color: 'black',
        alignSelf: 'flex-start'

    },
    txtnameproduct: {
        textAlign: 'left',
        color: 'black',
        alignSelf: 'flex-start',
        marginTop: 5,
        fontSize: 18

    },
    txtdetail: {
        textAlign: 'left',
        color: 'black',
        alignSelf: 'flex-start',
        fontSize: 18

    },
    txtprice: {
        textAlign: 'left',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    contaiicontimeaddress: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 20,

    },
    imgiconprofile: {
        width: 15,
        height: 15,
    },
    txtTime: {
        fontSize: 12,
        color: 'grey'
    },
    txtAdress: {
        fontSize: 12,
        color: 'grey'
    },
    txtViewAll: {
        color: '#306BD9',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical:20,
    },

});