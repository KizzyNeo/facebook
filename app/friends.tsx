import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Link} from 'expo-router';

const Friends = () => {
    return (
        <><View style={styles.container}>
            <Text style={styles.logo}>Friends</Text>
        </View>
        <View>
            <ScrollView style={styles.container2} showsVerticalScrollIndicator={false}>
                <Image style={styles.box} source={require('@/assets/images/status3.png')} />
                <Text style={styles.text1}>Suggestions</Text>
                <Image style={styles.box2} source={require('@/assets/images/status3.png')} />
                <Text style={styles.text2}>Your friends</Text>
                <Image style={{height: 500, width: 355, position: 'absolute', marginTop: 55}}source={require('@/assets/images/f1.jpg')} />
                <Image style={{height: 600, width: 355, position: 'relative', marginTop: 415}} source={require('@/assets/images/f2.jpg')} />
                <Image style={{height: 600, width: 355, position: 'relative', marginTop: 0}} source={require('@/assets/images/f3.jpg')} />
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
    box: {
        height: 200,
        width: 133,
        position: 'relative',
        marginTop: -60,
        marginLeft: 10
    },
    box2: {
        height: 200,
        width: 133,
        position: 'relative',
        marginTop: -200,
        marginLeft: 150
    },
    text1: {
        marginTop: 23,
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 30,
        position: 'absolute'
    },
    text2: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 23,
        marginLeft: 175,
        position: 'absolute'
    }
})

export default Friends;