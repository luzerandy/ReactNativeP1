import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';
import Contacto1 from '../Screens/ContactoUno';
import Contacto2 from '../Screens/ContactoDos';
const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#e28743",
                inactiveTintColor:"#eab676",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Contacto1"
                component={Contacto1}
                options={{
                    tabBarLabel:"Contacto 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Contacto2"
                component={Contacto2}
                options={{
                    tabBarLabel:"Contacto 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}