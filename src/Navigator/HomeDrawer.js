import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Screen/Home';
import TicketScreen from '../Screen/Ticket';
import NotificationsScreen from '../Screen/Notifications';
import ChangePassword from '../Screen/ChangePassword';
import ProfileScreen from '../Screen/Profile';
import Trip from '../Screen/Trip';

import CustomDrawer from '../Components/Drawer'
import colors from '../Themes/Colors';
import ApplicationStyle from '../Themes/Application.Style';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: colors.primary,
        labelStyle: styles.textNormal,
      }}>

      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Trip" component={Trip} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Ticket" component={TicketScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
    </Drawer.Navigator>

  );
};
export default HomeDrawer;


const styles = {
  ...ApplicationStyle,
};

export function isIphoneX() {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim) || isIPhone12SeriesSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}

export function isIPhone12SeriesSize(dim) {
  return dim.height >= 844 || dim.width >= 844;
}

