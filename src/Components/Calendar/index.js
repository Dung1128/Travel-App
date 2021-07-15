import React, { useState, } from 'react';
import { View, TouchableOpacity } from 'react-native';
import moment from 'moment'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ApplicationStyle from '../../Themes/Application.Style';
import colors from '../../Themes/Colors';
import Recipe from './Recipe'
import DayComponent from './DayComponent'
import Text from '../Text'
import { fontFamily, padding } from '../../const';

const themeCalendar = {
    textSectionTitleColor: colors.colorText,
    backgroundColor: '#fff',
    calendarBackground: '#fff',
    arrowColor: colors.colorText,
    monthTextColor: colors.colorText,
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontFamily: fontFamily.regular,
    textMonthFontFamily: fontFamily.regular,
    textDayHeaderFontFamily: fontFamily.regular,
    todayTextColor: colors.colorAccept
}


LocaleConfig.locales['vi'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'THáng 12'],
    monthNamesShort: ['Thg1.', 'Thg2.', 'Thg3', 'Thg4', 'Thg5', 'Thg6', 'Thg7', 'Thg8', 'Thg9', 'Thg10', 'Thg11', 'Thg12'],
    dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    today: 'Hôm nay\'hn'
};
LocaleConfig.defaultLocale = 'vi';

const CustomCalendar = ({ onChooseDay, propDay }) => {

    const [currentDate, setCurrentDate] = useState(propDay)
    const onSetCurrentDate = (date) => {

        setCurrentDate(date.dateString)
        onChooseDay(date.dateString)
    }


    return (
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Ngày đi</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    setCurrentDate(moment().format('YYYY-MM-DD'))
                    onChooseDay(moment().format('YYYY-MM-DD'))
                }}>
                    <Text style={{ ...styles.textNormal, fontFamily: 'Nunito-Bold' }}>Hôm nay</Text>
                </TouchableOpacity>
            </View>
            <Calendar
                current={currentDate}
                firstDay={1}
                onDayPress={(day) => { console.log('selected day', day) }}
                monthFormat={'MM yyyy'}
                hideDayNames={false}
                onMonthChange={(month) => { console.log('month changed', month) }}
                hideExtraDays={true}
                theme={themeCalendar}
                dayComponent={({ date }) => {
                    let lunarDay = Recipe.convertSolar2Lunar(date.day, date.month, date.year, 7.0)[0]
                    let lunarMonth = Recipe.convertSolar2Lunar(date.day, date.month, date.year, 7.0)[1]

                    return (
                        <DayComponent
                            currentDate={currentDate}
                            lunarDay={lunarDay}
                            lunarMonth={lunarMonth}
                            date={date}
                            onChooseDate={(date) => onSetCurrentDate(date)}
                        />
                    );
                }}
            />
        </View>
    );
};
export default CustomCalendar;

const styles = {
    ...ApplicationStyle,
    content: {
        padding: padding.normal
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

}