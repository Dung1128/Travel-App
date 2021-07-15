import React, { memo, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from 'native-base'
import Header from '../../Components/Header';
import styles from './styles';
import Text from '../../Components/Text'


const ChangePassword = memo(() => {
    const navigation = useNavigation();
    const dispatch = useDispatch();


    return (
        <Container
            style={{ ...styles.mainContainer, }}>
            <Header
                title='Đổi mật khẩu'
                type="menu" />

        </Container>
    );
});
export default ChangePassword;
