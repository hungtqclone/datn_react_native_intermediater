import { StyleSheet } from 'react-native'


export const CGDStyles = StyleSheet.create({
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
        
        height:100,
        backgroundColor:'white',
        
    },
    contaiBannerFla:{
        alignContent: 'center',
        backgroundColor:'white',
        padding:10,
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

});
