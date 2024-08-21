import React from "react"; 
import { Text ,View, StyleSheet, ScrollView } from 'react-native'; 
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 
import { SafeAreaView } from "react-native-safe-area-context";

const CreateCard = () => { 
	
	return( 
			<View>
				<ScrollView style={Styles.scroll}>
			<Card> 
			<Card.Content> 
				<Title>Geeks For Geeks</Title> 
			</Card.Content> 
			<Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> 
			<Card.Content> 
			<Paragraph>A Computer Science portal for Geeks</Paragraph> 
			</Card.Content> 
			<Card.Actions> 
			<Button>Add To Favourites</Button> 
			</Card.Actions> 
			</Card> 

			<Card> 
			<Card.Content> 
				<Title>Geeks For Geeks</Title> 
			</Card.Content> 
			<Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> 
			<Card.Content> 
			<Paragraph>A Computer Science portal for Geeks</Paragraph> 
			</Card.Content> 
			<Card.Actions> 
			<Button>Add To Favourites</Button> 
			</Card.Actions> 
			</Card>
			</ScrollView> 
			</View>
	);
} 

export default CreateCard; 

const Styles = StyleSheet.create({ 
	card: {
        height: 360,
        width: 360,
        marginTop: 180,
		alignContent: 'center',
        marginLeft: 0,
        position: 'absolute'
    },
    nextCard: {
        height: 360,
        width: 360,
		alignContent: 'center',
        position: 'absolute',
        marginLeft: 0,
        marginTop: 530
    },
	scroll: {
		width: 360,
		alignContent: 'center',
		marginLeft: 0,
		marginRight: 0,
		marginTop: 180

	}
});
