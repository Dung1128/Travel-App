import React, { useRef, useState, useEffect, } from 'react';
import {
  View,
} from 'react-native';

import { Container, } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import styles from './styles';
import Text from '../../Components/Text'
import Header from '../../Components/Header';


const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (

    <Container style={{ ...styles.mainContainer }}>
      <Header
        title='Trang chủ'
        type='menu'
      />
    </Container>

  );
};
export default HomeScreen;
