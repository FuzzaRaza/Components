import React from "react";
//import Header from "./Header";
import {LogoTitle} from "./LogoTitle";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };*/
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              Id: 86,
              othrs: 'parameters',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    //creating parameters with default value
    const { navigation }= this.props;
    const Id= navigation.getParam('Id','No ID found');
    const othrs= navigation.getParam('othrs','No parameters found yet!');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Id: {JSON.stringify(Id)}</Text>
        <Text>othrs: {JSON.stringify(othrs)}</Text>
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.push('Details',
          {Id: Math.floor(Math.random()*100),
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back to Previous window"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},
  {
    initialRouteName:"Home", //good to set default route so that if route sequence changed screen should change
    defaultNavigationOptions:{
      title: 'Resume',
      headerTitle:<LogoTitle />,
      headerStyle: {
        position:'center',
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);  