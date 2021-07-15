import { StyleSheet } from 'react-native';
import ApplicationStyle from '../../Themes/Application.Style';
import { fontFamily, fontSize, padding } from '../../const';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  textContent: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    marginTop: 10,
    alignSelf: 'center',
  },
  btnLogin: {
    backgroundColor: colors.primary,
    padding: padding.normal,
    borderRadius: padding.small,
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  textLogin: {
    fontSize: fontSize.normal,
    color: colors.badgeColor,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  empty: {
    width: 44,
    height: 50,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  }
});
