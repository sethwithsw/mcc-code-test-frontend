import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import Styles from '../../styles/Styles';
import Query from '../../lib/query';

const LoginSceen = ({ navigation }) => {
    const [info, setInfo] = useState({
        email: "",
        pw: "",
    });
    const sendSignUp = async (data) => {
        let error = "";
        if (data.pw == "") {
            error = "Please enter password";
        } else if (data.email == "") {
            error = "Please enter email";
        }
        
        if (error != "" ) {
            alert(error);
            return;
        }

        try {
            let r = await Query.signIn(data);
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
    return (
        <View style={LoginSceenStyle.container}>
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
            <View style={LoginSceenStyle.buttonContainer}>
                <Button
                    title="Confirm"
                    onPress={async () => await sendSignUp(info)}
                />
            </View>
        </View>
    )
}

export default LoginSceen;

const LoginSceenStyle = StyleSheet.create({
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