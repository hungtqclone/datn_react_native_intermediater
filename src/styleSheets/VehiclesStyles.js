import { StyleSheet } from 'react-native'


export const VehicleStyle = StyleSheet.create({
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
        marginVertical:10,
        paddingTop:10,

    },
    txttitleKP: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    contaiTitle: {
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


    // Row có gì hot
    containerHotV: {
        width: '100%',
        height:450,
        backgroundColor:'#0B234F',
        borderRadius:8,
      },
      
      // product
    contaiProductV:{
        width: '100%',
        height:'100%',
        alignItems:'center',
        padding:10,
    },

    productBodyV:{
        borderRadius:8,
        height:'100%',
        marginRight:10,
        padding:10,
        width:220,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
    },
    imgproductV:{
        width:'100%',
        height:'60%',
        padding:2
    },
    txtTitleProductV:{
        fontSize:20,
        fontWeight: '900',
        paddingTop:10,
        color:'white',
        alignSelf:'flex-start'
        
    },
    txtnameproductV:{
        textAlign:'center',
        color:'grey',
        fontSize:14,
        paddingVertical:5,
    },
    txtdetailV:{
        textAlign:'center',
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:8,
    },
    
    txtTimeV:{
        fontSize:12,
        color:'grey'
    },
    presableAllV:{
        width:'100%',
        height:50,
        borderRadius:5,
        marginVertical:15,
        backgroundColor:'white',
        justifyContent:'center',
        padding:5,
    },
    txtPreessV:{
        alignSelf:'center',
        alignItems:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:16,
        
    },
    contaiiPriceV:{
        borderRadius:5,
        marginTop:10,
        flexDirection:'column',
        alignItems:'flex-start',
        width:'100%',
        height:50,
        backgroundColor:'#F4F4F4',
        padding:5,


    },
    txtpriceV:{
        textAlign:'left',
        color:'black',
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'flex-start',
    },
    txtnamePriceV:{
        textAlign:'center',
        color:'grey',
        fontSize:12,
    },
});