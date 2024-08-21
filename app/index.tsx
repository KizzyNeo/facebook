import React, { useState } from 'react';
import { SafeAreaView, Image, Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from "./home";
import Friends from "./friends";
import Message from "./message";
import Notification from "./notification";
import Videos from "./videos";
import Poll from "./poll";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
       <> 
       <View style={styles.view}>
       <Image style={styles.image1} source={require('@/assets/images/icon1.png')} />
       <Text style={styles.logo}>facebook</Text>
       <Image style={styles.image2} source={require('@/assets/images/icon2.png')} />
       <Image style={styles.image3} source={require('@/assets/images/icon3.png')} />
       </View>
       <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Friends') {
                    iconName = focused ? 'perm-contact-cal' : 'perm-contact-cal';
                } else if (route.name === 'Message') {
                    iconName = focused ? 'message' : 'message';
                } else if (route.name === 'Notification') {
                    iconName = focused ? 'notifications' : 'notifications-none';
                } else if (route.name === 'Videos') {
                    iconName = focused ? 'video-library' : 'video-library';
                } else if (route.name === 'Poll') {
                    iconName = focused ? 'poll' : 'poll';
                }

                return <MaterialIcons name={iconName} size={20} color={color} />;
            },
            tabBarLabel: () => { return null; },
            tabBarStyle: {height: 50, position: 'static', marginTop: 23 },
            tabBarActiveTintColor: '#0164FF',

            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen
                name="Home"
                component={Home} />
            <Tab.Screen
                name="Friends"
                component={Friends} />
            <Tab.Screen
                name="Message"
                component={Message} />
            <Tab.Screen
                name="Notification"
                component={Notification} />
            <Tab.Screen
                name="Videos"
                component={Videos} />
            <Tab.Screen
                name="Poll"
                component={Poll} />
        </Tab.Navigator></>
    );

}

export default function App() {
    return (
            <MyTabs />
    );
}

const styles = StyleSheet.create({
    logo: {
        color: '#0164FF',
        fontWeight: '700',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 30,
        position: 'absolute',
        textAlign: 'left'
    },
    image1: {
        height: 47,
        width: 47,
        position: 'relative',
        backgroundColor: 'white',
        marginTop: 2,
        marginLeft: 210
    },
    image2: {
        height: 47,
        width: 47,
        position: 'relative',
        backgroundColor: 'white',
        marginTop: 2,
        marginLeft: 0
    },
    image3: {
        height: 47,
        width: 47,
        position: 'relative',
        backgroundColor: 'white',
        marginTop: 2,
        marginLeft: 0
    },
    image4: {
        height: 22,
        width: 22,
        position: 'absolute',
        marginTop: 60,
        marginLeft: 20,
    },
    view : {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 28 
    },
    }
)