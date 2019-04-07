import React, { Component } from 'react';
import { Image } from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./image.png')}
          style={{ width: 50, height: 50 }}
        />
      );
    }
  }

export {LogoTitle}