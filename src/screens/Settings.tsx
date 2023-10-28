import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewText: {
        fontSize: 24,
        textAlign: 'center',
    },
});

const Settings = (): JSX.Element => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.viewText}>Settings</Text>
        </View>
    );
};

export default Settings;
