import React from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'
import moment from 'moment'
import ApplicationStyle from '../../Themes/Application.Style';
import colors from '../../Themes/Colors';
import Text from '../Text'

export default class DayComponent extends React.PureComponent {

    customStyleDate(date, currentDate) {
        if (date.dateString == currentDate) {
            return {
                backgroundColor: '#FFC20E',
            }
        }
        return {
            backgroundColor: '#fff',
        }

    }

    customStyleTitleDate(date) {
        if (date.dateString < moment().format('YYYY-MM-DD')) {
            return {
                color: colors.grey,
            }
        }

        if (date.dateString > moment().endOf('month').add(1, 'M').format('YYYY-MM-DD')) {
            return {
                color: colors.grey,
            }
        }


        return {
            color: colors.colorText,
        }

    }

    customStyleTitleDateLunar(date) {
        if (date.dateString < moment().format('YYYY-MM-DD')) {
            return {
                color: colors.grey,
            }
        }

        if (date.dateString > moment().endOf('month').add(1, 'M').format('YYYY-MM-DD')) {
            return {
                color: colors.grey,
            }
        }

        return {
            color: colors.colorText,
        }

    }

    render() {

        const { lunarDay, lunarMonth, date, currentDate } = this.props;

        return (
            <TouchableOpacity
                onPress={() => this.props.onChooseDate(date)}
                disabled={date.dateString < moment().format('YYYY-MM-DD')}
                activeOpacity={0.7}
                style={{
                    width: 48,
                    minHeight: 40,
                    borderRadius: 8,
                    padding: 2,

                    ...this.customStyleDate(date, currentDate),
                }}>
                <View style={{
                    alignItems: 'center',
                    // justifyContent: 'center',
                }} >
                    <Text style={{
                        ...styles.textNormal,
                        ...this.customStyleTitleDate(date),
                    }}>
                        {date.day}
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{
                        ...styles.textSmall,
                        color: colors.colorText,
                        ...this.customStyleTitleDateLunar(date)
                    }}>
                        {lunarDay} {lunarDay == 1 && `/${lunarMonth}`}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
}


const styles = {
    ...ApplicationStyle,

}