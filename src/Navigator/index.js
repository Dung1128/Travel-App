import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Alert, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import StackAuth from './StackAuth';
import { clearNetworkFail } from '../actions';
import FlashMessage from "react-native-flash-message";
import i18n from '../../utils/i18n';
import localesResource from '../assets/locales/index'
import codePush from "react-native-code-push";
import HomeDrawer from './HomeDrawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootContainerScreen = () => {
  const sendNetworkFail = useSelector(state => state.sendNetworkFail);
  const getLanguage = useSelector(state => state.setting.language);
  const user = useSelector(state => state.profile?.user);
  const [loadingState, setLoadingState] = useState(true)
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
      });
    }
  };



  useEffect(() => {

    i18n.init({
      fallbackLng: 'en',
      lng: getLanguage,
      ns: ['translations'],
      defaultNS: 'translations',
      resources: localesResource,
      debug: true,
      // react: {
      //   wait: true,
      // },
      react: { useSuspense: true }
    });

    i18n.on('languageChanged', lng => {
      const currentLanguage = getLanguage;
      if (currentLanguage !== lng) {
        dispatch({
          type: 'setting/changeTheme',
          payload: lng,
        });
      }
    });

    setTimeout(() => setLoadingState(false), 2000)
  }, []);

  useEffect(() => {

    if (sendNetworkFail.err) {
      switch (sendNetworkFail.err) {
        case 'NETWORK_ERROR':
          // Toast.show('No network connection, please try again');
          return Alert.alert(
            'Có lỗi',
            'Không thể kết nối tới server. Vui lòng kiểm tra kết nối của bạn trong cài đặt và thử lại sau.',
            [
              {
                text: 'Đóng',
                onPress: () => { clearNetworkStatus(); }
                ,
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  clearNetworkStatus();
                },
                style: 'ok',
              },
            ],
            { cancelable: false },
          );


        case 'TIMEOUT_ERROR':
          // Toast.show('Timeout, please try again');
          return Alert.alert(
            'Có lỗi',
            'Không thể kết nối tới server. Vui lòng kiểm tra kết nối của bạn trong cài đặt và thử lại sau.',
            [
              {
                text: 'Đóng',
                onPress: () => { clearNetworkStatus(); }
                ,
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  clearNetworkStatus();
                },
                style: 'ok',
              },
            ],
            { cancelable: false },
          );

        case 'CONNECTION_ERROR':
          // Toast.show('DNS server not found, please try again');

          return Alert.alert(
            'Có lỗi',
            'Không thể kết nối tới server. Vui lòng kiểm tra kết nối của bạn trong cài đặt và thử lại sau.',
            [
              {
                text: 'Đóng',
                onPress: () => { clearNetworkStatus(); }
                ,
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  clearNetworkStatus();
                },
                style: 'ok',
              },
            ],
            { cancelable: false },
          );
        default:
          return Toast.show(sendNetworkFail.err);

      }
      // clearNetworkStatus();
    }

  }, [sendNetworkFail.err]);



  if (loadingState) {
    return <View style={styles.splashView}>
      <LottieView
        source={require('./bus.json')}
        autoPlay
        loop
      />
    </View>
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          initialRouteName={!user ? 'Login' : 'Home'} screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen
            initialRouteName="Login"
            name="Login"
            component={StackAuth}
          />
          <Stack.Screen name="Home" children={HomeDrawer} />

        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage />
    </SafeAreaProvider>
  );
};
export default RootContainerScreen;
