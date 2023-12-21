import { StyleSheet } from "react-native";
import {COLOR} from "./theme";

export const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
    },
    main: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        fontStyle: 'normal',
        color: COLOR.titlePrimary,
    },
    titleBig: {
        fontSize: 18,
        fontWeight: "700",
        fontStyle: 'normal',
        color: COLOR.titlePrimary,
    },
    titleMedium: {
        fontSize: 14,
        fontWeight: "700",
        fontStyle: 'normal',
        color: COLOR.titlePrimary,
    },
    titleSmall: {
        fontSize: 12,
        fontWeight: "700",
        fontStyle: 'normal',
        color: COLOR.titlePrimary,
    },
    txtinput: {
        width: '90%',
        height: 48,
        borderWidth: 0.1,
        borderColor: '#E7E7E7',
        backgroundColor:'#E7E7E7',
        paddingLeft: 15,
        borderRadius: 5,
        paddingVertical: 2,
    },
    button: {
        backgroundColor: COLOR.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 48,
        borderRadius:8,
        borderColor: '#F26F25'
    }
})