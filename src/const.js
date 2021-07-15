import { Dimensions } from 'react-native';

export const barStyle = {
  darkContent: 'dark-content',
  lightContent: 'light-content',
};

export const fontSize = { small: 13, medium: 14, normal: 15, title: 18, large: 20, header: 22 };

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export function formatNumber(value) {
  if (value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  return value;
}


export const padding = {
  small: 8,
  normal: 16,
  large: 24,
  header: 32,
};

export const fontFamily = {
  bold: 'Nunito-Bold',
  regular: 'Nunito-Regular',
  medium: 'Nunito-Regular',
  light: 'Nunito-Light',
  demiBold: 'Nunito-Regular',
  lightItalic: 'Nunito-LightItalic',
  italic: 'Nunito-Italic',
  semibold: 'Nunito-SemiBold',
};
