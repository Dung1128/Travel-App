import React, { useRef, useState } from 'react';
import { View, } from 'react-native';
import Text from '../../Components/Text'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header';
import colors from '../../Themes/Colors';

const Tab = createMaterialTopTabNavigator();

const Ticket = () => {
  const setting = useSelector(state => state.setting)
  const user = useSelector(state => state.profile?.user)

  const theme = setting.theme



  return (
    <SafeAreaProvider>
      <Header
        type='menu'
        title="Đơn hàng" style={{
          backgroundColor: theme.bg1
        }} statusBarColor={colors.white}
      />

    </SafeAreaProvider>
  );
};

export default Ticket;
