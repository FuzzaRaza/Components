//Imports with Destructuring
import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

//Prepare the contents
class Header extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
}
//Make them available to the app
export {Header}