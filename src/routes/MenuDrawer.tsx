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
            <Navigator initialRouteName="News" drawerPosition="right">
                <Screen name="News" component={NewsStack}></Screen>
                <Screen name="Schedule" component={Schedule}></Screen>
                <Screen name="Notifications" component={NotificationsStack}></Screen>
                <Screen name="Account" component={Account}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}

export default MenuDrawer;