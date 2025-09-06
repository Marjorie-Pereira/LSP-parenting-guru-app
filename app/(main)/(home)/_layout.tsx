import { Tabs } from 'expo-router';
import React from 'react';
// import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="(tabs)/schedules"
        options={{
            tabBarLabel: "Agendas"
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
            tabBarLabel: "Início"
        }}
      />
      <Tabs.Screen
        name="trackerDevice"
        options={{
            tabBarLabel: "Viagens"
        }}
      />

    </Tabs>
  )
}