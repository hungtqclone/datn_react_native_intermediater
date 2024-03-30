import { StyleSheet } from 'react-native'


export const MGNStyles = StyleSheet.create({
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
        justifyContent: 'space-between',
        padding: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    contaiimg: {
        flexDirection: 'row',
    },
    // Gói Package 
    containerPackage: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        padding: 10,
    },
    containerIemPackge: {
        borderRadius: 20,
        backgroundColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginRight: 10,
    },
    imgPackage: {
        width: 20,
        height: 20,
    },
    txtPackage: {
        paddingHorizontal: 3,
    },
    // body Tin tức
    bodyNews: {
        marginTop: 8,
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    contaiProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center'
    },
    imgProfile: {
        width: 50,
        height: 50,
    },
    txtProfile: {

        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    contaiPoint: {
        height: 40,
        backgroundColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
    },
    imgcoint: {
        width: 20,
        height: 20,
    },
    contaiJus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnTouch: {
        width: 25,
        height: 25,
        backgroundColor: '#228b22',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    txtPoint: {
        marginHorizontal: 40,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    //tabview
    tabview1: { width: '100%', height: '100%', backgroundColor: 'white' },
    tabBar: {
        backgroundColor: '#ffffff',
      },
})

