import { StyleSheet } from 'react-native'


export const productStyles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E8E8E8'
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
        height: 120,
        backgroundColor: '#FFBF17',
    },
    contaiCarousel: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
    },
    // thanfh pho
    contaicity: {
        flexDirection: 'Column',
        backgroundColor: 'white',
        padding: 10,
    },
    viewrow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconadd: {
        width: 15,
        height: 15,
    },
    icondown: {
        width: 12,
        height: 12,
    },
    txtTQ: {
        color: 'black',

    },
    // lọc theo hảng giá 
    contaifilter: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'

    },
    contaifill: {
        flexDirection: 'row',
        width: '20%',
    },
    contaifillScroll: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 5,
    },
    iconfilter: {
        width: 20,
        height: 20,
    },

    // contaiAdresss
    contaiAdresss: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        marginVertical: 8,
    },
    contaifillScrollAdress: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    txtGY: {
        color: 'black',
        fontWeight: 'bold',

    },
    // finkey
    contaifinkey: {
        marginVertical: 8,
        width: 110,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'column',
        borderRadius: 2,
        justifyContent: 'center',
        marginHorizontal: 2,
    },

    txtfindkey: {
        textAlign: 'center',
        padding: 5
    },
    // title dưới slide:
    contaiTitle: {
        padding: 10,
        width: 90,
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
    // Category
    contaiCategory: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: 5,
        height: 300,
    },

    categoryBody: {
        padding: 10,
        width: 90,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgcategoy: {
        width: 60,
        height: 60
    },
    txtTitleCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10,
        color: 'black'
    },
    txtCategoty: {
        textAlign: 'center',
        color: 'black',

    },


    // posttnews
    contaiProduct: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    productBody2: {
        borderBottomWidth: 0.5,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#DCDCDC'
    },
    contaiColum: {
        flexDirection: 'column',
        width: '68%',
        marginLeft: 5,
        justifyContent: 'space-between'
    },
    imgproduct: {
        width: '30%',
        height: 100,
    },
    txtTitleProduct: {
        fontSize: 20,
        fontWeight: '900',
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
    txtTitle: {
        textAlign: 'left',
        color: 'black',
        alignSelf: 'flex-start',
        fontSize: 15

    },
    txtDetail: {
        fontSize: 13
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




})

