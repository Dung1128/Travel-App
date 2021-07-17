import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SystemMessage } from 'react-native-gifted-chat';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { deviceWidth, padding } from '../../const';
import colors from '../../Themes/Colors';


export const renderSystemMessage = (props) => (
    <SystemMessage
        {...props}
    // containerStyle={{ backgroundColor: 'pink' }}
    // wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
    // textStyle={{ color: 'crimson', fontWeight: '900' }}
    />
);

export const renderMessage = (props) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: props?.position == 'left' ? 'flex-start' : 'flex-end',
            marginHorizontal: 16,
        }}>
        {props?.position == 'left' && props?.currentMessage?.user?._id !== props?.nextMessage?.user?._id ?
            <View style={{ paddingRight: 4, justifyContent: 'flex-end', paddingBottom: 16 }}>
                <Image
                    source={{ uri: `https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png` }}
                    style={{
                        width: 26,
                        height: 26,
                        borderRadius: 15
                    }}
                    resizeMode='cover'
                />
            </View> :
            <View style={{ paddingRight: 4, justifyContent: 'flex-end', }}>
                <View style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15
                }}>

                </View>
            </View>


        }
        <View style={{
            marginBottom: props?.currentMessage?.user?._id == props?.nextMessage?.user?._id ? 4 : padding.normal,
            width: '80%',
            alignItems: props?.position == 'left' ? 'flex-start' : 'flex-end',
        }}>
            <View style={{
                backgroundColor: props?.position == 'left' ? colors.green : colors.blue,
                padding: padding.normal,
                flexDirection: 'row',
                borderRadius: 16,
                paddingVertical: padding.small,
            }}>
                <View>
                    <Text style={{ fontSize: 16 }}>
                        {props?.currentMessage?.text}
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'right', paddingTop: 4 }}>
                        {moment(props?.currentMessage?.createdAt).format('HH:mm')}
                    </Text>
                </View>

            </View>
        </View>
    </View>
);



export const renderScrollToBottomComponent = () => (
    <IconAntDesign name='arrowdown' size={18} />
);
