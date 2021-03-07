import React from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'

const Record = (props) => {
    return (
        <View style={RecordStyles.container}>
            <Text>Record ID: {props.data.id}</Text>
            <Text>Date: {props.data.date_time}</Text>
            <Text>Patient: {props.data.patient}</Text>
            <Text>Doctor: {props.data.doctor}</Text>
            <Text>Diagnosis: {props.data.diagnosis}</Text>
            <Text>Medication: {props.data.medication}</Text>
            <Text>Consultation Fee: {props.data.consult_fee}</Text>
            <Text>Has follow up?: {props.data.has_follow_up ? "Yes" : "No"}</Text>
        </View>
    )
}

export default Record;

const RecordStyles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#CBCBCB',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 20,
        height: 160
    }
})