import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Bienvenido</Text>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    bold:{
        fontWeight:'bold',
        fontSize: '50px',
    },
});