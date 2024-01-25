import { StyleSheet } from 'react-native'


export const JobStyles = StyleSheet.create({
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
});