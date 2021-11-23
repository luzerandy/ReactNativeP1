import React from 'react'
import { StyleSheet, Text, View, Button,  } from 'react-native'

const Programas = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title= "JAVASCRIPT"
                onPress={()=>navigation.navigate('JsScreen')}
            />
            <Button 
                title= "REACT"
                onPress={()=>navigation.navigate('ReactScreen')}
            />
        </View>
    )
}

export default Programas;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});