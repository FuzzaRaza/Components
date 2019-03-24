import React, { Component } from 'react';
import { Image } from 'react-native';

class ProfilePic extends Component {
    render() {
        let pic = {
            uri: this.props.imageURL
        };
        return (
            <Image source={pic} style={{ width: 300, height: 300 }} />
        );
    }
}

export default ProfilePic;