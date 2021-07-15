import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { fontFamily, fontSize } from '../../const';


const TextCustom = (props) => {

    const setting = useSelector(state => state.setting);
    const theme = setting.theme

    return <Text
        {...props}
        allowFontScaling={false}
        style={[{
            fontFamily: fontFamily.regular,
            fontSize: fontSize.normal,
            color: theme.textColor1
        },
        props.style
        ]}>{props.children}
    </Text>
}


export default TextCustom;