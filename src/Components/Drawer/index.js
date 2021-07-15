import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Text from '../Text'
import ApplicationStyle from '../../Themes/Application.Style';
import colors from '../../Themes/Colors';
import { deviceWidth, padding } from '../../const';
import { removeLoggedUser } from '../../store/Ho.Action'

const CustomDrawer = (props) => {
  const dispatch = useDispatch()

  const [activeScreen, setActiveScreen] = useState(0);
  const user = useSelector(state => state.profile.user)
  const onRemoveLoggedUser = () => dispatch(removeLoggedUser())


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
            if (id < 4) {
              props.navigation.navigate(route);
              setActiveScreen(id);
            } else {
              Alert.alert('Thông báo', 'Bạn có muốn đăng xuất không?', [
                {
                  text: 'Đóng',
                  onPress: () => { }
                  ,
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    onRemoveLoggedUser();
                    props.navigation.closeDrawer();
                    props.navigation.replace('Login')
                  },
                  style: 'ok',
                },
              ],
                { cancelable: false },
              );
            }
            if (activeScreen == id) {
              props.navigation.closeDrawer();
            }
          }}>
          <Text style={[styles.textNormal, { fontFamily: activeScreen == id ? 'Nunito-Bold' : 'Nunito-Regular' }]}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderToolbar = () => {
    return (
      <View style={[styles.containerDrawer]}>
        <View style={styles.profileView}>
          <Image
            style={styles.img}
            source={{ uri: `https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png` }} />
          <View style={{ paddingLeft: padding.normal }}>
            <Text style={styles.textBold}>{user?.name}</Text>
            <Text style={styles.textSmall}>{`Version 1.0.0.1`}</Text>
          </View>
        </View>
        {renderRow('Home', 'Home', 0)}
        {renderRow('Chuyến đi', 'Trip', 1)}
        {renderRow('Ticket', 'Ticket', 2)}
        {renderRow('Đổi mật khẩu', 'ChangePassword', 3)}
        {renderRow('Đăng xuất', 'Logout', 4)}
      </View>
    );
  };

  return <View>{renderToolbar()}</View>;
};

const styles = {
  ...ApplicationStyle,

  containerDrawer: {
    paddingTop: Platform.OS === 'android' ? 0 : isIphoneX() ? 40 : 30,
    width: '100%',
    width: '100%',
    backgroundColor: colors.backgroundColor
  },
  itemContainer: {
    backgroundColor: colors.white
  },

  activeRow: {
    backgroundColor: colors.yellow,
    padding: padding.normal,
  },
  unActiveRow: {
    backgroundColor: colors.badgeColor,
    padding: padding.normal,
  },
  profileView: {
    height: deviceWidth / 4.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: padding.normal,
    flexDirection: 'row',

  },
  img: {
    width: deviceWidth / 8, height: deviceWidth / 8,
    borderRadius: deviceWidth / 16
  }
}

export default CustomDrawer;

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
