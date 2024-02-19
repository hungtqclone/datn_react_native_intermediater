import { StyleSheet } from 'react-native'


export const PNStyles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    containerse: {
        width: '100%',
        height: 70,
        backgroundColor: "#FFBF17",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-around',
        padding: 10,
    },
    iconchotot:{
        marginLeft:100,
        width:100,
        height:50,
    },
    presContai:{
        borderRadius:5,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:0.5,
        borderColor:'grey',
        alignContent:'space-between',
        margin:10,
        marginBottom:20,
    },
    contaicolum:{
        padding:5,
        width:'93%',
        flexDirection:'column',

    },
    contairow:{
        flexDirection:'row',
    },
    imgDow:{
        width:15,
        height:15,
    },
    txtCate:{
        fontSize:13,
        
    },
    txtContent:{
        fontSize:16,
        color:'black'
    },
    viewtile:{
        padding:10,
        flexDirection:'column',
        backgroundColor:'#F4F4F4',
    },
    viewrow:{
        flexDirection:'row',
    },
    txtTT:{
        fontSize:16,
        color:'grey'
    },
    txtQD:{
        color:'blue',
    },

    contaiupload:{
        padding:10,
        width:'100%',

    },
    tcouploadimg:{
        marginTop:15,
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#F4F4F4',
        borderWidth:1,
        borderColor:'#FF8800'
    },
    txtloadimg:{
        marginTop:10,
        fontSize:14,
        fontWeight:'bold',
    },
    txtThang:{
        fontSize:14,
        fontWeight:'bold',
    },
    inputTT:{
        marginTop:15,
        width:'100%',
        height:50,
        borderRadius:5,
        borderWidth:0.5,
    },
    presAddres:{
        borderRadius:5,
        width: '100%',
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:0.5,
        borderColor:'grey',
        alignContent:'space-between',
    }
});
