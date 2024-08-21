import React from "react";
import {View, Text,Image, ScrollView, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

const Videos = () => {
    return (
        <><View style={styles.container}>
            <Text style={styles.logo}>Videos</Text>
        </View>
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container2}>
                <Image style={styles.first} source={require('@/assets/images/vid1.jpg')} />
                <Image style={styles.second} source={require('@/assets/images/vid2.jpg')} />
                <Image style={styles.third} source={require('@/assets/images/vid3.jpg')} />
                <Image style={styles.fourth} source={require('@/assets/images/vid4.jpg')} />
                <Image style={styles.fifth} source={require('@/assets/images/vid5.jpg')} />
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
        height: 200,
        width: 355,
        position: 'absolute',
        marginTop: 10
    },
    second: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: 120
    },
    third: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: 0,
    },
    fourth: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: -5,
    },
    fifth: {
        height: 500,
        width: 350,
        position: 'relative',
        marginTop: 10,
    }
})

export default Videos;