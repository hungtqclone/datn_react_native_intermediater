import { StyleSheet } from 'react-native'


export const CGDStyles = StyleSheet.create({
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
        marginTop: 8,
        padding: 8,

    },
    categoryBody: {
        padding: 5,
        width: 75,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgcategoy: {
        width: 60,
        height: 60
    },
    txtTitleCategory: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 5,
        color: 'black'
    },
    txtCategoty: {
        textAlign: 'center',
        color: 'black',

    },
    // Row có gì hot
    containerHot: {
        width: '100%',
        height:450,
        backgroundColor:'#FFAB2B',
        borderRadius:8,
      },
      
      // product
    contaiProduct:{
        width: '100%',
        height:'100%',
        alignItems:'center',
        padding:10,
    },

    productBody:{
        borderRadius:5,
        height:'100%',
        marginRight:10,
        padding:10,
        width:150,
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:0.2,
        borderColor:'#DCDCDC'
    },
    imgproduct:{
        width:'100%',
        height:'50%',
        padding:2
    },
    txtTitleProduct:{
        fontSize:20,
        fontWeight: '900',
        paddingVertical:10,
        color:'white',
        
    },
    txtnameproduct:{
        textAlign:'left',
        color:'black',
        alignSelf:'flex-start',
        marginTop:5,
        fontSize:18

    },
    txtdetail:{
        textAlign:'left',
        color:'black',
        alignSelf:'flex-start',
        fontSize:15

    },
    txtprice:{
        textAlign:'left',
        color:'red',
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'flex-start',
        marginTop:5,
    },
    contaiicontimeaddress:{
        flexDirection:'row',
        alignSelf:'flex-start',
        marginTop:20,

    },
    imgiconprofile:{
        width:15,
        height:15,
    },
    txtTime:{
        fontSize:12,
        color:'grey'
    },
    txtAdress:{
        fontSize:12,
        color:'grey'
    },
    presableAll:{
        width:'90%',
        height:50,
        borderRadius:5,
        borderWidth:1,
        marginVertical:15,
        backgroundColor:'white',
        borderColor:'grey',
        justifyContent:'center',
    },
    txtPreess:{
        alignSelf:'center',
        alignItems:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:16,
        
    },

    // Ofical Store
    containerOfical:{
        marginVertical:10,
        width:'100%',
        height:400,
        borderRadius:5,
        backgroundColor:'white',
        padding:8,
    },
    txtOffical:{
        marginVertical:10,
        fontSize:20,
        fontWeight: 'bold',
        color:'black'
    },
    // Item Offical
    contaiitemOffical:{
        width:'80%',
        height:'100%',
        borderWidth:0.2,
        borderColor:'grey',
        borderRadius:5,
        marginRight:10,
    },

    contaiTitleOffical:{
        width:'100%',
        height:50,
        flexDirection:'row',
        borderRadius:5,
        padding:12,
        justifyContent:'space-between',
        alignItems:'center',
    },
    imgTitleOffical:{
        borderRadius:50,
        width:35,
        height:35,
    },
    txtTitleOffical:{
        width:'60%',
        fontSize:18,
        fontWeight: '600',
        color:'black'
    },
    imgMark:{
        width:20,
        height:20,
    },
    imgright:{
        width:20,
        height:20,
    },
    // Product ofical
    productBodyOffical:{
        padding:10,
        width:'50%',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:0.2,
        borderColor:'#DCDCDC'
    },
    imgproductOffical:{
        width:'100%',
        height:175,
        padding:2
    },
    txtTitleProductOffical:{
        fontSize:18,
        fontWeight: 'bold',
        paddingVertical:10,
        paddingLeft:10,
        color:'black',
        alignSelf:'flex-start'
        
    },
    txtnameproductOffical:{
        textAlign:'left',
        color:'black',
        alignSelf:'flex-start',
        marginTop:5,
        fontSize:18

    },
    txtdetailOffical:{
        textAlign:'left',
        color:'black',
        alignSelf:'flex-start',
        fontSize:18

    },
    txtpriceOffical:{
        textAlign:'left',
        color:'red',
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'flex-start',
        marginTop:5,
    },
    contaiicontimeaddressOffical:{
        flexDirection:'row',
        alignSelf:'flex-start',
        marginTop:20,

    },
    imgiconprofileOffical:{
        width:15,
        height:15,
    },
    txtTimeOffical:{
        fontSize:12,
        color:'grey'
    },
    txtAdressOffical:{
        fontSize:12,
        color:'grey',
        marginHorizontal:5,
    },
    
});
