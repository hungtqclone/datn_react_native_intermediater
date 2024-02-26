import { StyleSheet } from 'react-native'


export const ShopStyles = StyleSheet.create({
    

    // Ofical Store
    containerOfical:{
        marginVertical:10,
        width:'100%',
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
        width:300,
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
    contairow:{
        flexDirection:'row',

    }
});
