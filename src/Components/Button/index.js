import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Spinner, View } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import Text from '../../Components/Text'
import colors from '../../Themes/Colors';

export default class extends Component {
    static propTypes = {
        isPending: PropTypes.bool,
        showPending: PropTypes.bool,
        upperCase: PropTypes.bool,
        text: PropTypes.string,
        textStyle: PropTypes.object,
        content: PropTypes.object,
        right: PropTypes.object,
        left: PropTypes.object,
        style: PropTypes.object,
        buttonType: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        color: PropTypes.string,
        requestKey: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        showPending: true,
        upperCase: true,
        color: colors.yellow,
        deviceWidth: false,
        disabled: false
    };

    render() {
        const {
            isPending,
            text,
            textStyle,
            content,
            style,
            onPress,
            buttonType,
            color,
            right,
            left,
            showPending,
            upperCase,
            iconColor,
            requestKey,
            disabled,
            ...props
        } = this.props;


        return (
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.7}
                {...props}
                onPress={!isPending ? onPress : () => { }}
                style={[
                    {
                        ...styles.button,
                        ...style
                    },
                    buttonType === 'border'
                        ? { ...styles.buttonBorder, borderColor: color }
                        : { backgroundColor: color }
                ]}
            >
                {left}
                {content ||
                    (isPending && showPending ? (
                        <View>
                            <Spinner
                                color={buttonType === 'border' ? color : 'white'}
                                size="small"
                                style={{ flex: 1 }}
                            />
                        </View>
                    ) : (
                        <Text
                            style={[
                                { ...styles.textNormal, ...textStyle },
                                buttonType === 'border'
                                    ? { color }
                                    : { ...styles.textNormal, ...textStyle }
                            ]}
                        >
                            {upperCase ? (text || '').toUpperCase() : text}
                        </Text>
                    ))}
                {right}
            </TouchableOpacity>
        );
    }
}
