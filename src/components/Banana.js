import React, { Component } from 'react';
import { Image } from 'react-native';

class Banana extends Component {
    render() {
        let pic = {
            uri: this.props.imageURL
        };
        return (
            <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}

export default Banana;