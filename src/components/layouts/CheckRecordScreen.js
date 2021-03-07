import React from 'react';
import { Button, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Record from '../Record'
import Styles from '../../styles/Styles';

const CheckRecordScreen = ({route}) => {
    const {rows} = route.params;
    return (
        <ScrollView style={CheckRecordScreenStyles.container}>
            {rows.map(value => {
                return <Record key={value.id} data={value} />
            })}
        </ScrollView>
    )
}

export default CheckRecordScreen;

const CheckRecordScreenStyles = StyleSheet.create({
    container: {
    //    flex: 1,
    //    alignItems: 'stretch',
    //    justifyContent: 'flex-start',
    //    overflow: 'hidden'
    }
})