import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import styles from '../DrawerNavigator/styles';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(0);

  const changeStyleRow = (activeScreen, id) => {
    if (activeScreen === id) {
      return styles.activeRow;
    }
    return styles.unActiveRow;
  };

  const renderRow = (name, route, id) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={changeStyleRow(activeScreen, id)}
          activeOpacity={0.5}
          onPress={() => {
            if (id < 5) {
              navigation.navigate(route);
              setActiveScreen(id);
            } else {
              navigation.dispatch(StackActions.popToTop());
            }
          }}>
          <Text>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderToolbar = () => {
    return (
      <View style={[styles.containerDrawer]}>
        {renderRow('Home', 'HomeScreen', 0)}
        {renderRow('Follower', 'FollowerScreen', 1)}
        {renderRow('Setting', 'SettingScreen', 3)}
        {renderRow('Logout', 'Login', 5)}
      </View>
    );
  };

  return <View>{renderToolbar()}</View>;
};

export default CustomDrawer;
