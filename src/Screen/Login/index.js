import React, { useEffect, useState, useRef } from 'react'
import {
  TouchableOpacity,
  View, StatusBar, Dimensions,
  ActivityIndicator,
  AppState, Image, Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import PinCode from "react-native-simple-code-input";
import Text from '../../Components/Text'
import TextInput from '../../Components/TextInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../Themes/Colors'
import Header from '../../Components/Header'
import moment from 'moment'
import { Container, Content, Spinner } from 'native-base';
import Button from '../../Components/Button'
import styles from './styles'
import { padding } from '../../const';
import {
  saveProfile
} from '../../store/Ho.Action'
import ManagementNoti from '../../ManagementNoti'

const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height


const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState(0)
  const [expire_time, setExpireTime] = useState(null)

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);


  const theme = useSelector(state => state.setting.theme)

  const intervalRef = useRef()
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(false)
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const onSaveProfile = data => dispatch(saveProfile(data))


  const isNumeric = (value) => {
    return /^-{0,1}\d+$/.test(value)
  }


  const onVerifyOtp = (otp) => {
    confirmCode(otp)
  }

  const onGetOTP = () => {

    setLoading(true)
    signInWithPhoneNumber(phone)
  }

  useEffect(() => {
    if (count) {
      intervalRef.current = setInterval(
        () => setCount((count) => count - 1),
        1000
      )
      if (!count > 0) {

        clearInterval(intervalRef.current)
      }
      return () => {

        clearInterval(intervalRef.current)
      }
    }

  }, [count])

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {


    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);

  };

  const renderCountDown = () => {
    if (expire_time && count > 0) {
      return <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 12 }}>
        <Text style={styles.textSmall}>Bạn chưa nhận được mã?</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textSmall}>Yêu cầu nhận mã mới trong</Text>
        </View>
        <View style={{ padding: padding.small }}>
          <Text style={styles.textMedium}>{Math.floor(count / 60)}:{count % 60 < 10 ? `0${count % 60}` : count % 60}</Text>
        </View>
      </View>
    } else
      return <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
        {!loading ? <TouchableOpacity style={{ marginTop: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          onPress={onGetOTP}>
          <View>
            <Text style={{
              ...styles.textMedium,
              color: colors.colorText,
              fontFamily: 'Nunito-SemiBold',
              color: colors.blue,
            }}>Gửi lại</Text>
          </View>

        </TouchableOpacity> :
          <Spinner color={'black'} size="small" />}
      </View>
  }

  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    setPosition(1)
    setCount(300)
    setLoading(false)
  }


  const confirmCode = async (code) => {
    try {
      const res = await confirm.confirm(code);
      onSaveProfile({
        phone: phone,
        name: phone
      })
      navigation.navigate('Home')

    } catch (error) {
      console.log('Invalid code.');
    }
  }




  return (
    <Container style={{ backgroundColor: colors.white }}>
      <Header
        statusBarColor={colors.white}
        style={{ backgroundColor: colors.white }}
        title={'Đăng nhập tài khoản'}

      />
      <Content>

        {
          position == 0 &&
          <View>
            <View style={{ marginTop: imageHeight / 14 }}>
              <Text style={{
                ...styles.textMedium,
                textAlign: 'center',
                color: colors.colorText
              }}>Vui lòng nhập vào số điện thoại</Text>
            </View>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 27,
              marginHorizontal: padding.normal,
              backgroundColor: theme.bg2,
              borderRadius: 6,
              paddingHorizontal: padding.normal
            }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Feather name='phone' size={16} />
              </View>
              <TextInput
                autoFocus
                autoCorrect={false}
                clearButtonMode='while-editing'
                returnKeyType='done'
                keyboardType='phone-pad'
                style={{
                  ...styles.textMedium,
                  margin: 0, padding: 0,
                  paddingHorizontal: 4,
                  alignSelf: 'center',
                  height: 48,
                  flex: 1,
                  paddingHorizontal: padding.small,
                  color: '#050505'
                }}
                onChangeText={value => setPhone(value)}
                value={phone}
                onSubmitEditing={onGetOTP}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              marginTop: 18,
              alignItems: 'center',
              marginBottom: 20,
              justifyContent: 'center'
            }}>
              <Ionicons name='lock-closed' size={14} />
              <Text style={{ ...styles.textMedium, marginLeft: 10 }}>Dữ liệu của bạn được bảo mật và an toàn</Text>
            </View>

            <Button
              isPending={loading}
              onPress={onGetOTP}
              text={'Tiếp tục'}
              color={colors.yellow}
              upperCase={false}
              textStyle={{ ...styles.textTitle, ...styles.textSemiBold }} />
          </View>}
        {position == 1 &&
          <View style={{ marginTop: imageHeight / 14 }}>
            <Text
              style={{
                ...styles.textMedium,
                color: colors.colorText,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 5,
              }}>
              Vui lòng nhập mã xác nhận{'\n'}đã được gửi tới số của bạn</Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 16,
                alignItems: 'center'

              }}
              onPress={() => {
                setPosition(0)

              }}>
              <Text style={{ ...styles.textNormal, fontFamily: 'Nunito-SemiBold', paddingHorizontal: padding.small, }}>{phone}</Text>
              <Icon name='create-outline' size={18} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
              <PinCode
                autoFocus
                onFulFill={value => { onVerifyOtp(value) }}
                length={6}
                keyboardType="numeric"
                cuztomize
                renderValueComponent={value => (
                  <View key={Math.random()} style={[styles.empty, { backgroundColor: theme.bg2 }]}>
                    <Text style={{ fontSize: 20 }}>{value}</Text>
                  </View>
                )}
                renderEmptyComponent={value => (
                  <View key={Math.random()} style={[styles.empty, { backgroundColor: theme.bg2 }]} />
                )}
              />


            </View>

            {
              loading ? <View style={{ marginTop: 30, }}>
                <ActivityIndicator size="small" color={colors.colorText} style={{ marginTop: 12, alignSelf: 'center' }} />
              </View> : renderCountDown()
            }
          </View>
        }

      </Content>
      <ManagementNoti />
    </Container>
  )
}

export default Login