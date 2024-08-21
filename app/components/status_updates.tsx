import React from 'react';
import {View, Text,StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Friends from '../friends';

const Status = () => {
    return (
        <View style={{height: 530, width: 350, position: 'relative', marginTop: 40}}>
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
             <View style={styles.container2}>
                     <Image style={styles.profile} source={require('@/assets/images/profile_pic.png')} />
                        <Text style={styles.update} onPress={() => {'Friends'}}>What's on your mind?</Text>
                        <Image style={styles.status1} source={require('@/assets/images/status3.png')} />
                        <Image style={styles.status2} source={require('@/assets/images/status3.png')} />
                        <Image style={styles.photos} source={require('@/assets/images/photo-gallery.png')} />
                        <Text style={styles.text2}>Photo</Text>
                        <Image style={styles.line2} source={require('@/assets/images/line2.png')} />
                </View>
            <ScrollView style={styles.container} horizontal={true} >
            <Image style={styles.photo} source={require('@/assets/images/1.png')} />
            <Image style={{height: 180, width: 90, position: 'relative', marginLeft: 0, marginTop: 10}} source={require('@/assets/images/7.png')} />
            <Image style={styles.nextPhoto} source={require('@/assets/images/3.png')} />
            <Image style={styles.nextPhoto} source={require('@/assets/images/4.png')} />
            <Image style={styles.nextPhoto} source={require('@/assets/images/5.png')} />
            <Image style={styles.nextPhoto} source={require('@/assets/images/6.png')} />
            <Image style={styles.nextPhoto} source={require('@/assets/images/2.png')} />
            </ScrollView>
            <Image style={styles.post} source={require('@/assets/images/11.jpg')} />
            <Image style={{height: 530, width: 350, position: 'relative', marginTop: 60}} source={require('@/assets/images/12.jpg')} />
            <Image style={{height: 570, width: 350, position: 'relative', marginTop: 5}} source={require('@/assets/images/13.jpg')} />
            <Image style={{height: 520, width: 350, position: 'relative', marginTop: -8}} source={require('@/assets/images/14.jpg')} />
            <Image style={{height: 520, width: 350, position: 'relative', marginTop: -5}} source={require('@/assets/images/15.jpg')} />
            <Image style={{height: 550, width: 350, position: 'relative', marginTop: 10}} source={require('@/assets/images/16.jpg')} />
            <Image style={{height: 460, width: 350, position: 'relative', marginTop: 10}} source={require('@/assets/images/17.jpg')} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: 350,
        position: 'relative',
        marginTop: 70,
        backgroundColor: 'white'
    },
    container2: {
        height: 100,
        marginTop: -100,
        marginBottom: 20,
        position: 'absolute',
        backgroundColor: 'white'
    },
    main: {
        marginTop: -100,
        height: 800,
        width: 390,
        position: 'relative',
        backgroundColor: 'white'
    },
    post: {
        height: 460,
        width: 350,
        position: 'absolute',
        marginTop: 265,
        marginLeft: 0
    },
    nextPost: {
        height: 600,
        width: 350,
        position: 'relative',
        marginTop: 250,
        marginBottom: -260
    },
    nextPost2: {
        height: 470,
        width: 350,
        position: 'relative',
        marginTop: 260,

    },
    photo: {
        height: 180,
        width: 90,
        position: 'relative',
        marginTop: 15,
        marginLeft: 0,
    },
    nextPhoto: {
        height: 180,
        width: 90,
        position: 'relative',
        marginLeft: 5,
        marginTop: 10
    },
    profile: {
        height:40,
        width: 40,
        marginTop: 114,
        marginLeft:18,
        position: 'absolute'
    },
    status1: {
        height: 240,
        width: 240,
        marginTop: 20,
        marginLeft: 80,
        position: 'absolute',
        zIndex: 0
    },
    status2: {
        height: 240,
        width: 240,
        marginTop: 20,
        marginLeft: 25,
        position: 'absolute',
        zIndex: 0
    },
    update: {
        fontSize: 15,
        fontWeight: '400',
        marginTop: 121,
        marginLeft: 80,
        position: 'absolute',
        color: '#000',
        zIndex: 2
    },
    photos: {
        height: 35,
        width:35,
        marginTop: 110,
        marginLeft: 300,
        position: 'absolute'
    },
    text2: {
        fontSize: 11,
        marginTop: 145,
        position: 'absolute',
        marginLeft: 304
        
    },
    line2: {
        height: 400,
        width: 400,
        marginTop: 8,
        position: 'absolute',
        marginLeft: 0
    },
    line3: {
        height: 400,
        width: 400,
        position: 'absolute',
        marginLeft: 0,
        marginTop: 175
    }
});

export default Status;