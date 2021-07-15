import { PixelRatio, StyleSheet, Platform } from 'react-native';
import ApplicationStyle from '../../Themes/Application.Style';
import { deviceWidth, } from '../../const'

export default {
    ...ApplicationStyle,
    button: {
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth - 32,
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        height: 50
    },
    buttonBorder: {
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white'
    },
};
