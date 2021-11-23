import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Programas from '../Screens/Programas';
import ReactScreen from '../Screens/ReactScreen';
import JsScreen from '../Screens/JsScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Programas" component={Programas}
                options={{headerShown:false, headerTitle:'Programar'}}
            />
            <Stack.Screen name="JsScreen" component={JsScreen}
                options={{headerTitle:'Javascript'}}
            />
            <Stack.Screen name="ReactScreen" component={ReactScreen}
                options={{headerTitle:'React'}}
            />

        </Stack.Navigator>

    )
}