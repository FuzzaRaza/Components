import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Banana from './Banana';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import ProfilePic from './ProfilePic';

class Basic extends Component {
    render() {
        return (
            <ScrollView>
                <Header headerText="My Personal Information" />
                <ProfilePic imageURL="https://timesofindia.indiatimes.com/thumb/msid-65021879,imgsize-16139,width-400,resizemode-4/65021879.jpg" />
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