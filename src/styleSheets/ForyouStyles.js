import { StyleSheet } from 'react-native'


export const foryouStyles = StyleSheet.create({

    contaiProduct:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
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
        fontSize:20,
        fontWeight: '900',
        paddingVertical:10,
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
    txtOffical:{
        textAlign:'left',
        marginVertical:10,
        fontSize:20,
        fontWeight: 'bold',
        color:'black'
    },



})

