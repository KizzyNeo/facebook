import React from "react";
import {View, Text,Image, ScrollView, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

const Poll = () => {
    return (
        <><View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container2}>
                <Image style={styles.first} source={require('@/assets/images/poll1.jpg')} />
                <Image style={styles.second} source={require('@/assets/images/poll2.jpg')} />
                <Image style={styles.third} source={require('@/assets/images/poll4.jpg')} />
                <Image style={styles.fourth} source={require('@/assets/images/poll3.jpg')} />
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    container2: {
        backgroundColor: 'white',
        height: 620
    },
    first: {
        height: 620,
        width: 350,
        position: 'absolute',
        marginTop: 0
    },
    second: {
        height: 160,
        width: 350,
        position: 'relative',
        marginTop: 640
    },
    third: {
        height: 600,
        width: 350,
        position: 'relative',
        marginTop: 15,
    },
    fourth: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: 0,
    },
})

export default Poll;