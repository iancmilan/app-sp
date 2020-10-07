import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MenuDrawer from './src/routes/MenuDrawer';

export default function App() {
  return (
    <>
      <MenuDrawer />
      <StatusBar style="auto" />
    </>
  );
}