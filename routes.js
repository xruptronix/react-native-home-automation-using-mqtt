import React from 'react';
import {createDrawerNavigator,createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons 
        name={icon} size={22} style={{color:tintColor}}
    />
);

const HomeStack = createStackNavigator(
    {
        Home:Home
    },
    {
        navigationOptions : {
            drawerIcon: getDrawerItemIcon('home')
        }
    }
    
);

const AboutStack = createStackNavigator(
    {
        About:About
    },
    {
        navigationOptions : {
            drawerIcon: getDrawerItemIcon('info')
        }
    }
);

const ContactStack = createStackNavigator(
    {
        Contact:Contact
    },
    {
        navigationOptions : {
            drawerIcon: getDrawerItemIcon('contact-phone')
        }
    }
);

const AppNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        About: AboutStack ,
        Contact: ContactStack
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);