import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import Text from '../../Components/Text'
import { padding } from '../../const';
import colors from '../../Themes/Colors';



class CustomTopTab extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    activeStylesText = index => {
        if (index == this.props.state.index) {
            return {
                color: this.props.theme.colorText1,
                fontFamily: 'Nunito-Bold',
                fontSize: 15
            };
        }

        return {
            color: this.props.theme.colorText1,
            fontFamily: 'Nunito-Regular',
            fontSize: 15
        };
    };


    onPress = (index, route) => {
        if (this.props.state.index !== index) {
            this.props.navigation.navigate(route);
        }
    };


    acitveTabStyles = index => {
        if (index == this.props.state.index) {
            return {
                borderBottomWidth: 2,
                borderBottomColor: colors.yellow

            };
        }
        return {
            borderBottomWidth: 2,
            borderBottomColor: colors.white
        };
    };



    render() {

        return (
            <View style={{ height: 40, backgroundColor: this.props.theme.bg1 }}>
                <View style={{ ...styles.containerTab, }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.onPress(0, 'TripA')}
                        style={[styles.itemTab, this.acitveTabStyles(0)]}>
                        <Text style={[this.activeStylesText(0)]}>Chiều đi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.onPress(1, 'TripB')}
                        style={[styles.itemTab, this.acitveTabStyles(1)]}>
                        <Text style={[this.activeStylesText(1)]}>Chiều về</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: 'rgba(202, 203, 208, 0.4)', width: '100%' }} />

            </View>
        );
    }
}

const styles = {

    containerTab: {
        flexDirection: 'row',
        flex: 2,
        height: 39,
        alignItems: 'center',

    },
    itemTab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

        marginHorizontal: padding.normal,
        height: '100%'
    }


}

export default CustomTopTab;
