import { Drawer } from 'expo-router/drawer';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    useEffect(() => {
        console.log(Layout)
    })
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <Drawer>
            <Drawer.Screen
            name='(home)'
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                
            }}
            />
            <Drawer.Screen
            name='profile'
            options={{
                drawerLabel: 'Perfil',
                title: 'Seu Perfil'
            }}
            />
            <Drawer.Screen
            name='family'
            options={{
                drawerLabel:"Família",
                title: 'Seus Familiares'
            }}
            />
            <Drawer.Screen
            name='settings'
            options={{
                drawerLabel:"Configurações",
                title: 'Eu odeio React Native'
            }}
            />
            
            
        </Drawer>
    </GestureHandlerRootView>
  )
}