import React from 'react'
import { TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import { fontFamily, fontSize } from '../../const';
import colors from '../../Themes/Colors';


const TextInputCustom = (props) => {

    const setting = useSelector(state => state.setting);
    const theme = setting.theme

    return <TextInput
        {...props}
        allowFontScaling={false}
        underlineColorAndroid='transparent'
        style={[{
            fontFamily: fontFamily.regular,
            fontSize: fontSize.normal,
            color: theme.textColor1
        },
        props.style
        ]} />
}


export default TextInputCustom;