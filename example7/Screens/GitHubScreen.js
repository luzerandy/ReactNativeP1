import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function GitHubScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name={"logo-github"} size={100} color='black'/>
            <Text style={styles.bold}>@luzerandy</Text>
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
        fontSize: '30px',
    },
});