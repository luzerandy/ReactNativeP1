import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function ContactoDos() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Contacto #2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bold:{
        fontWeight:'bold',
        fontSize: 30,
    },
});
