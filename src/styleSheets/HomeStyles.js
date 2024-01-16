import { StyleSheet } from 'react-native'


export const homeStyles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor:'#E8E8E8'
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
        margin:10,
    },
    icon:{
        marginHorizontal:5,
    },
    contaiBanner:{
        height:120,
        backgroundColor:'#FFBF17',
    },
    contaiCarousel:{
        width:'100%',
        height:150,
        backgroundColor:'red',
    },

    // title dưới slide:
    contaiTitle:{
        padding:10,
        width:90,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white'
    },
    imgTitle:{
        width:40,
        height:40
    },
    txtTitle:{
        textAlign:'center',
        color:'black'

    },
    // Category
    contaiCategory:{
        width:'100%',
        backgroundColor:'white',
        marginTop:8,
        height:300,
    },

    categoryBody:{
        padding:10,
        width:90,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white'
    },
    imgcategoy:{
        width: 60,
        height:60
    },
    txtTitleCategory:{
        fontSize:18,
        fontWeight: 'bold',
        paddingTop:10,
        paddingLeft:10,
        color:'black'
    },
    txtCategoty:{
        textAlign:'center',
        color:'black',
        
    },
    // product
    contaiProduct:{
        width:'100%',
        backgroundColor:'white',
        marginTop:8,
        alignItems:'center',
    },

    productBody:{
        padding:10,
        width:'50%',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:0.2,
        borderColor:'#DCDCDC'
    },
    imgproduct:{
        width:'100%',
        height:175,
        padding:2
    },
    txtTitleProduct:{
        fontSize:18,
        fontWeight: 'bold',
        paddingVertical:10,
        paddingLeft:10,
        color:'black',
        alignSelf:'flex-start'
        
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
        fontSize:18

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




})

