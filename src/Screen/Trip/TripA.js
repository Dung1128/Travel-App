import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base'

const TripA = (props) => {


    useEffect(() => {
        console.log(props.extraData)
    }, [props.extraData])

    return (
        <Container>
            <Text>TripA</Text>
        </Container>
    );
};
export default TripA;
