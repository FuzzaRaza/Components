import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Banana from './Banana';
import Header from './Header';
import ProfilePic from './ProfilePic';
import Content from './Content';
import Footer from './Footer';
import ProfilePic from './ProfilePic';

class Basic extends Component {
    render() {
        return (
            <ScrollView>
                <Header headerText="My Personal Information" />
                <ProfilePic imageURL="data:image/png;base64,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" />
                <Content contentHeading="Professional Exp" text="2018 -- 2019: Worked with Some Company as a React Native Dev" />
                <Content contentHeading="Education" text="2017 -- 2018: Diploma in React Native Dev" />
                <Content contentHeading="Education" text="2017 -- 2018: Diploma in React Native Dev" />
                <Content contentHeading="Education" text="2017 -- 2018: Diploma in React Native Dev" />
                <Content contentHeading="Education" text="2017 -- 2018: Diploma in React Native Dev" />
                <Footer footerText="CopyRights -- 2019" />
            </ScrollView>
        );
    }
}
export default Basic;