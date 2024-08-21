import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

const Notification = () => {
    return (
        <><View style={styles.container}>
            <Text style={styles.logo}>Notification</Text>
        </View>
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container2}>
                <Image style={styles.first} source={require('@/assets/images/notification.jpg')} />
                <Image style={styles.second} source={require('@/assets/images/notification2.jpg')} />
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 6,
        fontSize: 25,
        fontWeight: '800',
        marginLeft: 10,
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'white'
    },
    container2: {
        backgroundColor: 'white',
        height: 580
    },
    first: {
        height:550,
        width: 350,
        position: 'absolute',
        marginTop: 20
    },
    second: {
        height: 600,
        width: 350,
        position: 'relative',
        marginTop: 569
    }
})

export default Notification;