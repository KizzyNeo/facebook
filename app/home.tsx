import React from "react";
import {View, StyleSheet} from "react-native";
import Status from "./components/status_updates";

const Home = () => {
    return (
        <View style={styles.home}>
            <Status />
        </View> 
    )
}

const styles = StyleSheet.create({
    home: {
        height: 100,
        width: 200,
        position: 'relative',
        marginTop: 60,
    },
});

export default Home;