import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Account from '../pages/Account';
import Schedule from '../pages/Schedule';

import NewsStack from './NewsStack';
import NotificationsStack from './NotificationsStack';


const { Navigator, Screen } = createDrawerNavigator();

function MenuDrawer() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="News" drawerPosition="right" drawerType="front">
                <Screen name="News" component={NewsStack} options={{ drawerLabel: "Notícias" }}></Screen>
                <Screen name="Schedule" component={Schedule} options={{ drawerLabel: "Agenda" }}></Screen>
                <Screen name="Notifications" component={NotificationsStack} options={{ drawerLabel: "Notificações" }}></Screen>
                <Screen name="Account" component={Account} options={{ drawerLabel: "Minha conta" }}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}

export default MenuDrawer;