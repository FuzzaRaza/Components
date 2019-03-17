//Imports
import { Text, View } from 'react-native';
import React from 'react';

//Prepare the contents
const Footer = (props) => {
    //Destructuring the styles
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.footerText}</Text>
        </View>
    );
};

//Style the contents
const styles = {
    viewStyle: {
        alignItems: "center",
        justifyConents: "center",
        backgroundColor: '#F8F8F8',
        marginBottom: 15,
        height: 30,
        paddingBottom: 15,
        // position: "absolute", // To make it at the bottom
        // bottom: 0 // To make it at the bottom
    },
    textStyle: {
        // alignSelf: 'center', // making text appear in center
        textAlign: 'center',
        fontSize: 12,
        backgroundColor: 'white'
    }
};

//Make them available to the app
export default Footer;