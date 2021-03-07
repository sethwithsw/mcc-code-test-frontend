
import React,{useState} from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import Styles from '../../styles/Styles';
import Query from '../../lib/query';

const CheckRecordDatePickScreen = ({ navigation }) => {
    const [info, setInfo] = useState({
        userId: global.user.id,
        from: "",
        to: "",
    });
    const sendCheckRecord = async (data) => {
        let error = "";
        if (data.from == "") {
            error = "Please enter from";
        } else if (data.to == "") {
            error = "Please enter to";
        } 
        
        if (error != "" ) {
            alert(error);
            return;
        }
        try {
            let r = await Query.checkRecord(data);
            if (r.error) {
                alert(r.error);
            } else if (r) {
                console.log(r)
                navigation.navigate("Records", {rows: r});
            }
        } catch (err) {
            alert(err);
        }
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.baseFont}>Input a date period</Text>
            <View style={checkRecordDatePickScreenStyles.buttonContainer}>
            <Text style={checkRecordDatePickScreenStyles.dateText}>From:</Text>
            <TextInput
                placeholder="From: (YYYY-MM-DD)"
                onChangeText={text => setInfo({...info, from:text})}
                defaultValue={info.from}
                style={Styles.baseTextInput}
            />
            <Text style={checkRecordDatePickScreenStyles.dateText}>To:</Text>
            <TextInput
                placeholder="To: (YYYY-MM-DD)"
                onChangeText={text => setInfo({...info, to:text})}
                defaultValue={info.to}
                style={Styles.baseTextInput}
            />
            <Button 
                onPress={
                    () => sendCheckRecord(info)
                }
                title="Confirm"
            />
            </View>
        </View>
    )
}

export default CheckRecordDatePickScreen;

const checkRecordDatePickScreenStyles = StyleSheet.create({
    buttonContainer: {
        margin: 40
    },
    dateText: {
        fontSize: 16,
        paddingBottom: 10,
        paddingTop: 10
    }
})