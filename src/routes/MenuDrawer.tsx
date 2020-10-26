import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NewsStack from './NewsStack';
import NotificationsStack from './NotificationsStack';
import SignInRequired from './SignInRequired';

import { AuthProvider } from '../contexts/auth';

const { Navigator, Screen } = createDrawerNavigator();

function MenuDrawer() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigator 
                initialRouteName="News" 
                drawerPosition="right" 
                drawerType="front"
                drawerContentOptions={{labelStyle: { color: '#FFF' }, style: { backgroundColor: '#353A40', }, activeTintColor: '#FFF'}}
                drawerStyle={{ width: 180 }}
                >
                    <Screen name="News" component={NewsStack} options={{ drawerLabel: "Notícias" }}></Screen>
                    <Screen name="Schedule" component={SignInRequired} options={{ drawerLabel: "Agenda" }}></Screen>
                    <Screen name="Notifications" component={NotificationsStack} options={{ drawerLabel: "Notificações" }}></Screen>
                    <Screen name="Account" component={SignInRequired} options={{ drawerLabel: "Minha conta" }}></Screen>
                </Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}

export default MenuDrawer;