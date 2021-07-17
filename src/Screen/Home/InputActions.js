import React from 'react';
import { Image, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import TextInput from '../../Components/TextInput'
import Text from '../../Components/Text'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { padding } from '../../const';
import colors from '../../Themes/Colors';

const InputActions = (props) => {
  return (
    <KeyboardAvoidingView>
      <View style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex: 1,
        backgroundColor: colors.black,
        marginBottom: 30
      }}>
        <View style={{
          flex: 1,
          paddingLeft: padding.normal,
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

        <View style={{
          backgroundColor: colors.backgroundColor,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: colors.backgroundColor,
          height: 40,
          paddingHorizontal: 12,
          justifyContent: 'center',
          flex: 1,
          marginHorizontal: 16
        }}>
          <TextInput
            placeholder='Aa'
            style={{ fontSize: 16 }}
            placeholderTextColor={colors.grey}
            onChangText={(text) => props.onInputTextChanged(text)}
            onFocus={() => console.log('focus')}
          />
        </View>
        <View style={{ paddingRight: padding.normal }}>
          <TouchableOpacity onPress={props.onSend} activeOpacity={0.6}>
            <Icon name='send-o' size={22} color={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default InputActions;
