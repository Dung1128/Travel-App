import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';

import Header from '../../Components/Header';
import styles from './styles';

const MenuScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Header type="menu" title="Setting" /> */}
      <Text>MenuScreen</Text>
    </View>
  );
};
export default MenuScreen;
