import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Banana from './Banana';

class Basic extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>M A Jinnah University</Text>
                <Banana imageURL="https://www.jinnah.edu/wp-content/uploads/2016/02/maj-log.png" />
            </View>
        );
    }
}


export default Basic;