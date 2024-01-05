import { StyleSheet } from 'react-native'
export const CityStyles = StyleSheet.create({
    Container: {
        width: "100%", backgroundColor: '#F1F2F6',
        height: "100%",


    },
    contaiappbar: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        // padding:30,
        backgroundColor: '#F1F2F6',
        alignItems: 'center'

    },
    pres:{
        marginLeft:10,
     },
    txtTille: {
        color: '#484D56',
        fontSize: 18,
        fontWeight: '500',
        fontFamily:'Roboto'
    },

    contaitxt: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        alignItems: 'center',
    },
    contaitxp: {
        marginBottom:10,
        flexDirection: 'row',
        width: '100%',
        height: 48,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
    },
    contaiCity:{
       marginTop:10,
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
        height: 56,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 4,
    },
    txtCity:{
        fontFamily:'Roboto',
        color:'#000000',
        fontSize:18,
        fontWeight:'400',
    },
})
