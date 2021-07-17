import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import TextInput from '../../Components/TextInput'
import Text from '../../Components/Text'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { padding } from '../../const';
import colors from '../../Themes/Colors';

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: '#222B45',
            // paddingTop: 6,
            height: 50,
            alignItems: 'center',
            position: 'relative',

        }}
    />
);

export const renderActions = (props) => console.log('===', props) || (
    <Actions
        {...props}
        containerStyle={{
            flex: 1,
            height: 50,
            marginBottom: 0,
            marginLeft: 12,
            justifyContent: 'center'
        }}
        icon={() => (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TouchableOpacity activeOpacity={0.6}>
                    <IconIonicons name='ios-add-circle-sharp' size={28} color={colors.grey} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <IconIonicons name='camera' size={28} color={colors.grey} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <IconIonicons name='ios-image' size={28} color={colors.grey} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <IconIonicons name='ios-mic' size={28} color={colors.grey} />
                </TouchableOpacity>
            </View>
        )}
    />
);

export const renderComposer = (props) => (

    <Composer
        {...props}
        composerHeight={40}
        placeholder='Aa'
        placeholderTextColor={colors.grey}
        textInputStyle={{
            backgroundColor: colors.backgroundColor,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: colors.backgroundColor,
            paddingHorizontal: 12,
            marginTop: 5,
            marginLeft: 8,
            lineHeight: 0,
            alignItems: 'center',
            borderWidth: 0,
            marginRight: !props.text ? 8 : 0,
            flex: 1
        }}
        multiline={false}
    />

);

export const renderSend = (props) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Icon name='send-o' size={20} color={'#fff'} />
    </Send>
);