
import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Styles from '../../styles/Styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.baseFont}>Welcome</Text>
            <View style={homeScreenStyles.buttonContainer}>
            <Button 
                onPress={
                    () => navigation.navigate('Login')
                }
                title="Login"
            />
            <Button
                onPress={
                    () => navigation.navigate('Sign Up')
                }
                title="Sign Up"
            />
            </View>
        </View>
    )
}

export default HomeScreen;

const homeScreenStyles = StyleSheet.create({
    buttonContainer: {
        margin: 40
    }
})