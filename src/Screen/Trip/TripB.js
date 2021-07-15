import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base'

const TripB = (props) => {

    useEffect(() => {
        console.log(props.extraData)
    }, [props.extraData])

    return (
        <Container>
            <Text>TripB</Text>
        </Container>
    );
};
export default TripB;
