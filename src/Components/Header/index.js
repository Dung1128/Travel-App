import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash'
import styles from './styles';
import colors from '../../Themes/Colors';
import { barStyle, padding } from '../../const';
import Text from '../Text'
import TextInput from '../TextInput'

const Header = props => {
  const navigation = useNavigation();

  const backRoute = React.useCallback(
    _.debounce(() => navigation.goBack(), 200),
    [], // will be created only once initially
  )

  const getOnSearch = React.useCallback(
    _.debounce((text) => props.onSearch(text), 200),
    [], // will be created only once initially
  )



  const renderHeader = props => {
    switch (props.type) {
      case 'back':
        return renderBack(props);
      case 'menu':
        return renderMenu(props);
      case 'none':
        return renderNone(props);
      case 'search':
        return renderSearch(props);
      case 'close':
        return renderClose(props)
      default:
        return renderDefaultHeader(props);
    }
  };


  const renderDefaultHeader = (props) => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        // barStyle={Appearance.getColorScheme() === 'dark' ? barStyle.lightContent : barStyle.darkContent}
        />
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
      </View>
    );
  };



  const renderNone = (props) => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        />
        <View style={{ paddingHorizontal: padding.normal }}>
          {/* <Image source={images.logoHV} resizeMode='contain' style={{ width: 110 }} /> */}
        </View>
      </View>
    );
  };


  const renderMenu = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          activeOpacity={0.6}
          onPress={navigation.openDrawer}>
          <IconIonicons
            name={'menu-outline'}
            size={30}
            color={colors.black}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight}>
          {
            props.title == 'Chuyến đi' &&
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.viewWrapIcLeft}
              onPress={props.rightOnPress}>
              <IconIonicons
                name={'calendar-outline'}
                size={20}
                color={colors.black}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => {
            !props.customBack && backRoute();
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'chevron-back'}
            size={22}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderClose = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.viewWrapIcLeft}
          onPress={() => {
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'ios-close-outline'}
            size={24}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={{ ...styles.titleToolbar, color: props.textColor }}>{props.title}</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={{ ...styles.toolbar, ...props.style, }}>
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={barStyle.darkContent}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: 60, height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            !props.customBack && backRoute();
            props.customBack && props.onCustomBack()
          }}>
          <IconIonicons
            name={'chevron-back'}
            size={28}
            color={props.textColor}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapSearch}>

          <TextInput
            autoFocus
            // defaultValue={this.props.defaultValue}
            keyboardType="default"
            underlineColorAndroid="transparent"
            placeholder="Nhập mã khuyến mại"
            clearButtonMode="while-editing"
            style={{ ...styles.textInput, color: '#050505' }}
            onChangeText={text => getOnSearch(text)}
          />

        </View>
        {/* <View style={styles.viewWrapIcRight} /> */}
      </View>
    );
  };

  return renderHeader(props);
};
export default Header;
