import React from "react";
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';

const Message = () => {
    return (
        <><View style={styles.container}>
            <Text style={styles.logo} >Message</Text>
        </View>
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container2}>
            <Image style={styles.first} source={require('@/assets/images/msg1.jpg')} />
            <Image style={styles.second} source={require('@/assets/images/msg2.jpg')} />
            </ScrollView>
        </View></>
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
        height: 600,
        width: 355,
        position: 'absolute',
        marginTop: 10
    },
    second: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: 550,
        zIndex: 2
    }
})

export default Message;