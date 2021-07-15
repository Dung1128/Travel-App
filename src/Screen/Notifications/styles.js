import { StyleSheet } from 'react-native';
import ApplicationStyle from '../../Themes/Application.Style';
import { fontFamily, fontSize, padding } from '../../const';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  viewTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // padding: padding.small,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 999,
    backgroundColor: colors.white,
    height: 44
  },
  btnTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ItemSeparatorComponent: {
    height: padding.normal
},
});
