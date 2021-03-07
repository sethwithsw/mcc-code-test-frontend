
import React from 'react';
import { useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import Styles from '../../styles/Styles';
import Query from '../../lib/query';

const NewRecordScreen = ({ navigation }) => {
    const [info, setInfo] = useState({
        userId: global.user.id,
        doctor: "",
        patient: "",
        diagnosis: "",
        medication: "",
        consultFee: 0.00,
        dateTime: "",
        hasFollowUp: false
    });
    const sendCreateRecord = async (data) => {
        let error = "";
        if (data.doctor == "") {
            error = "Please enter doctor";
        } else if (data.patient == "") {
            error = "Please enter patient";
        } else if (data.diagnosis == "") {
            error = "Please enter diagnosis";
        } else if (data.medication == "") {
            error = "Please enter medication";
        } else if (data.dateTime == "") {
            error = "Please enter date and time";
        } 
        
        if (error != "" ) {
            alert(error);
            return;
        }
        try {
            let r = await Query.newRecord(data);
            if (r.error) {
                alert(r.error);
            } else if (r.record_id) {
                alert("Record created!");
                navigation.navigate("Main Menu")
            }
        } catch (err) {
            alert(err);
        }
    }
    const [confirmPw, setConfirmPw] = useState("");
    return (
        <View style={NewRecordScreenStyles.container}>
            <TextInput
                placeholder="Doctor name"
                onChangeText={text => setInfo({...info, doctor:text})}
                defaultValue={info.doctor}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Patient name"
                onChangeText={text => setInfo({...info, patient:text})}
                defaultValue={info.patient}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Diagnosis" 
                onChangeText={text => setInfo({...info, diagnosis:text})}
                defaultValue={info.diagnosis}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Medication"
                onChangeText={text => setInfo({...info, medication:text})}
                defaultValue={info.medication}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Consultation fee"
                keyboardType='numeric'
                onChangeText={text => setInfo({...info, consultFee:parseFloat(text)})}
                style={Styles.baseTextInput}
            />
            <TextInput
                placeholder="Date and time in YYYY-MM-DD hh:mm:ss"
                onChangeText={text => setInfo({...info, dateTime:text})}
                defaultValue={info.dateTime}
                style={Styles.baseTextInput}
            />
            <View>
                <Text>Has follow-up consultation?</Text>
                <Switch
                    onValueChange={value => setInfo({...info, hasFollowUp:value})}
                    value={info.hasFollowUp}
                />
            </View>
            <View style={NewRecordScreenStyles.buttonContainer}>
                <Button
                    title="Confirm"
                    onPress={async () => await sendCreateRecord(info)}
                />
            </View>
        </View>
    )
}

export default NewRecordScreen;

const NewRecordScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        alignSelf: 'center'
    },
    switchContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between"
    }
})