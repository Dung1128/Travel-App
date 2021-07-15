import React, { memo, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    TouchableOpacity,
    View,
    Alert,
    Modal
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, Icon } from 'native-base'
import Header from '../../Components/Header';
import styles from './styles';
import Text from '../../Components/Text'
import moment from 'moment'
import TripA from './TripA'
import TripB from './TripB'
import CustomTopTab from './CustomTopTab'
import { padding } from '../../const';
import colors from '../../Themes/Colors';
const Tab = createMaterialTopTabNavigator();

LocaleConfig.locales['vi'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'THáng 12'],
    monthNamesShort: ['Thg1.', 'Thg2.', 'Thg3', 'Thg4', 'Thg5', 'Thg6', 'Thg7', 'Thg8', 'Thg9', 'Thg10', 'Thg11', 'Thg12'],
    dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    today: 'Hôm nay\'hn'
};
LocaleConfig.defaultLocale = 'vi';


const Trip = memo(() => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const setting = useSelector(state => state.setting)
    const theme = setting.theme
    const [markedDates, setMarkedDates] = useState(null)
    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))

    const onChangeDate = (day) => {
        const dateSelected = {};
        dateSelected[day.dateString] = { selected: true }
        setMarkedDates(dateSelected)
        setDate(day.dateString)
    }

    return (
        <SafeAreaProvider>
            <Header
                title='Chuyến đi'
                type="menu"
                rightOnPress={() => setVisible(!visible)}
            />
            <Tab.Navigator
                initialRouteName='TripA'
                // swipeEnabled={false}
                tabBar={props => <CustomTopTab {...props} theme={theme} />}>
                <Tab.Screen name="TripA" >
                    {props => <TripA {...props} extraData={date} />}
                </Tab.Screen>

                <Tab.Screen name="TripB" >
                    {props => <TripB {...props} extraData={date} />}
                </Tab.Screen>

            </Tab.Navigator>
            <Modal
                animationType="slide"
                visible={visible}
            >
                <View style={{ ...styles.toolbar, paddingHorizontal: padding.small, justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        activeOpacity={0.6}
                        style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <IconIonicons name='close' size={28} />
                    </TouchableOpacity>
                </View>
                <CalendarList
                    markedDates={markedDates}
                    minDate={moment().format('YYYY-MM-DD')}
                    onDayPress={(day) => {

                        onChangeDate(day)
                        setVisible(false)
                    }}
                    pastScrollRange={0}
                    futureScrollRange={2}
                    scrollEnabled={true}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: colors.yellow,
                        selectedDayTextColor: '#000',
                        todayTextColor: colors.yellow,
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                    }}
                />
            </Modal>

        </SafeAreaProvider>
    );
});
export default Trip;
