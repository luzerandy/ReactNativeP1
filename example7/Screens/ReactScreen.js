import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const ReactScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>REACT+imagen</Text>
        </View>
    )
}

export default ReactScreen

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