import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const JavascriptScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>JAVASCRIPT+imagen</Text>
        </View>
    )
}

export default JavascriptScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo: {
        width: 350,
        height: 400,
    },
});