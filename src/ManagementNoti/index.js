import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const ManagementNoti = memo((props) => {
    const navigation = useNavigation();

    const user = useSelector(state => state.profile?.user)

    const requestPermissionNoti = () => {
        try {
            messaging().requestPermission()
                .then(async (res) => {
                    const enabled =
                        res === messaging.AuthorizationStatus.AUTHORIZED ||
                        res === messaging.AuthorizationStatus.PROVISIONAL;
                    if (enabled) {
                        const fcmToken = await messaging().getToken();
                        console.log("fcmToken", fcmToken)
                        notifi()
                    }
                })
                .catch(err => {
                    console.log("err messaging", err)
                })
        } catch (error) {

        }
    }

    const notifi = () => {
        try {
            messaging().onNotificationOpenedApp(remoteMessage => {
                onRedriect(remoteMessage)
            });

            messaging()
                .getInitialNotification()
                .then(remoteMessage => {
                    if (remoteMessage) {
                        onRedriect(remoteMessage)
                    }
                });
        } catch (error) {

        }
    }

    const onRedriect = (message) => {
        const data = message?.data;
        onUpdateTimeNoti(new Date())
        if (data?.id) {
            if (user) {
                navigation.navigate('DetailNotification', { id: data?.id, type: 'template' })
            }
        }
    }


    useEffect(() => {
        requestPermissionNoti()
        notifi()
    }, [])


    return (
        <View />
    );
});
export default ManagementNoti;
