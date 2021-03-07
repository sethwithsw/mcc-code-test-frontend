import React from 'react';
import { useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Styles from '../../styles/Styles';
import Query from '../../lib/query';

const SignUpScreen = ({ navigation }) => {
    const [info, setInfo] = useState({
        email: "",
        pw: "",
        clinic: "",
        phone: "",
        address: ""
    });
    const sendSignUp = async (data) => {
        let error = "";
        if (data.pw !== confirmPw) {
            error = "Not same password!";
        } else if (data.pw == "") {
            error = "Please enter password";
        } else if (data.email == "") {
            error = "Please enter email";
        } else if (data.clinic == "") {
            error = "Please enter clinic name";
        } else if (data.phone == "") {
            error = "Please enter phone number";
        } else if (data.address == "") {
            error = "Please enter address"
        }
        
        if (error != "" ) {
            alert(error);
            return;
        }
        if (data.pw == confirmPw) {
            try {
                let r = await Query.signUp(data);
                if (r.error) {
                    alert(r.error);
                } else if (r.user) {
                    // Dirty way, but not enough time!
                    global.user = r.user;
                    global.token = r.token;
                    navigation.navigate('Main Menu');
                }
            } catch (err) {
                alert(err);
            }
        }
    }
    const [confirmPw, setConfirmPw] = useState("");
    return (
        <View style={SignUpScreenStyles.container}>
            <TextInput
                placeholder="E-mail address"
                onChangeText={text => setInfo({...info, email:text})}
                defaultValue={info.email}
                style={Styles.baseTextInput}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
            />
            <TextInput
                placeholder="Password"
                onChangeText={text => setInfo({...info, pw:text})}
                defaultValue={info.pw}
                style={Styles.baseTextInput}
                secureTextEntry={true}
            />
            <TextInput
                placeholder="Re-enter password" 
                onChangeText={text => setConfirmPw(text)}
                defaultValue={confirmPw}
                style={info.pw === confirmPw ?  Styles.baseTextInput : Styles.baseTextInputError}
                secureTextEntry={true}
            />
            <TextInput
                placeholder="Clinic name"
                onChangeText={text => setInfo({...info, clinic:text})}
                defaultValue={info.clinic}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Phone number"
                onChangeText={text => setInfo({...info, phone:text})}
                defaultValue={info.phone}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Address"
                onChangeText={text => setInfo({...info, address:text})}
                defaultValue={info.address}
                style={Styles.baseTextInput}
            />
            <View style={SignUpScreenStyles.buttonContainer}>
                <Button
                    title="Confirm"
                    onPress={async () => await sendSignUp(info)}
                />
            </View>
        </View>
    )
}

export default SignUpScreen;

const SignUpScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        alignSelf: 'center'
    }
})