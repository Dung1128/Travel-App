import React, { Component } from 'react';
import { Spinner } from 'native-base';



export default class extends Component {
    render() {
        return this.props.isPending ? (
            <Spinner style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                justifyContent: 'center',
                alignItems: 'center'
            }} color={'green'} size="small" />
        ) : null;
    }
}
