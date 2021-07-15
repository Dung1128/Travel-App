import colors from './Colors';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../const';

const ApplicationStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  toolbar: {
    flexDirection: 'row',
    width: '100%',
    // height: Platform.OS === 'android' ? 48 : isIphoneX() ? 88 : 78,
    // paddingTop: Platform.OS === 'android' ? 0 : isIphoneX() ? 40 : 30,
    height: Platform.OS === 'android' ? 48 : isIphoneX() ? 88 : 78,
    paddingTop: Platform.OS === 'android' ? 0 : isIphoneX() ? 40 : 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  viewWrapTitleNoti: {
    flex: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewWrapTitleToolbar: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleToolbar: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: 18
  },
  viewWrapIcLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icLeft: {
    width: 23,
    height: 23,
    tintColor: colors.white,
  },
  viewWrapIcRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icRight: {
    width: 23,
    height: 23,
    tintColor: colors.white,
  },
  textRight: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.medium,
  },
  viewHorizontalLine: {
    backgroundColor: colors.grey,
    height: 0.5,
    alignSelf: 'stretch',
  },
  textSmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
  },
  textMedium: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.medium,
  },
  textNormal: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
  },
  textSemiBold: {
    fontFamily: 'Nunito-SemiBold'
  },
  textBold: {
    fontFamily: 'Nunito-Bold'
  },
  textTitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.title,
  },
  textLarge: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
  },
  textHeader: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.header,
  }
});

export default ApplicationStyle;

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

