/**
 * @format
 */

import { AppRegistry } from 'react-native';
import HelloWorld from './src/components/Helloworld';
import Props from './src/components/Props';
import State from './src/components/State';
import Fetching from './src/components/Fetching';
import SectionWiseView from './src/components/SectionWiseView';

import ScrollView from './src/components/ScrollView';
import HandlingTouch from './src/components/HandlingTouch';
import TextHandling from './src/components/TextHandling';
import FlexboxLayout from './src/components/FLexboxLayout';
import HeightWidth from './src/components/HeightWidth';
import Styling from './src/components/Styling';
import Reactnav from './src/components/Reactnav';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Reactnav);
