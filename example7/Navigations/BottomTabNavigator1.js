import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Programas from '../Screens/Programas';
import GitHubScreen from '../Screens/GitHubScreen';
import TopTapNavigator1 from './TopTapNavigator1';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                activeTintColor:"#ff0099",
                inactiveTintColor:"#0099ff",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="GitHub"
                component={GitHubScreen}
                options={{
                    tabBarLabel:"Github",
                    tabBarIcon:({color})=>(
                        <Ionicons name="logo-github" size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Programas"
                component={Programas}
                options={{
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-react"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Contacto"
                component={TopTapNavigator1}
                options={{
                    tabBarLabel:"Contacto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}