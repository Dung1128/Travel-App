import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Content } from 'native-base'
import { FlatList, Image, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import styles from './styles';
import Text from '../../Components/Text'
import Header from '../../Components/Header';
import InputActions from './InputActions'
import Chats from './Chats'

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Container style={{ ...styles.mainContainer }}>
      <Header
        title='Trang chủ'
        type='menu'
      />
      <Chats />
    </Container>

  );
};
export default HomeScreen;
