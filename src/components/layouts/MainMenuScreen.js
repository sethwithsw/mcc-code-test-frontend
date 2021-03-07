import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Styles from '../../styles/Styles';

const MainMenuScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.baseFont}>Welcome, {global.user.clinic_name}</Text>
            <View style={homeScreenStyles.buttonContainer}>
            <Button 
                onPress={
                    () => navigation.navigate('New Record')
                }
                title="New Record"
            />
            <Button
                onPress={
                    () => navigation.navigate('Check Record')
                }
                title="Check Record"
            />
            </View>
        </View>
    )
}

export default MainMenuScreen;

const homeScreenStyles = StyleSheet.create({
    buttonContainer: {
        margin: 40
    }
})