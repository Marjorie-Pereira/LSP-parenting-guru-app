import { theme } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: theme.colors.primary}}>
      <Tabs.Screen
        name="home"
        options={{
            tabBarLabel: "Início",
            tabBarIcon: ({size, color}) => (
                <Ionicons name="home-outline" size={size} color={color} />
            )
        }}
      />

      <Tabs.Screen
        name="schedules"
        options={{
            tabBarLabel: "Agendas",
            tabBarIcon: ({size, color}) => (
                <Ionicons name="calendar-clear-outline" size={size} color={color} />
            )
        }}
      />
      
      <Tabs.Screen
        name="trackerDevice"
        options={{
            tabBarLabel: "Viagens",
            tabBarIcon: ({size, color}) => (
                <Ionicons name="map-outline" size={size} color={color} />
            )
        }}
      />
      <Tabs.Screen
        name="mindfulness"
        options={{
            tabBarLabel: "Autocuidado",
            tabBarIcon: ({size, color}) => (
                <Ionicons name="medical-outline" size={size} color={color} />
            )
        }}
      />

    </Tabs>
  )
}