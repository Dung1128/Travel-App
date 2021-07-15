import React from 'react';
import { Alert, } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Components/Header';
import colors from '../../Themes/Colors';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Notifications = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.profile?.user)
  const navigation = useNavigation()
  const setting = useSelector(state => state.setting)
  const theme = setting.theme


  return (
    <SafeAreaProvider>
      <Header type="menu"
        title="Thông báo" style={{
          backgroundColor: theme.bg1,

        }}
        statusBarColor={colors.white}

      />

    </SafeAreaProvider>
  );
};

export default Notifications;
