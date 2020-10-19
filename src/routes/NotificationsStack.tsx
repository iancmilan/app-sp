import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../pages/Notifications';
import NotificationDetails from '../pages/NotificationDetails';

const { Navigator, Screen } = createStackNavigator();

function NotificationsStack() {
    return (
        <Navigator initialRouteName="Notifications" screenOptions={{ headerShown: false }}>
            <Screen name="Notifications" component={Notifications}></Screen>
            <Screen name="NotificationDetails" component={NotificationDetails}></Screen>
        </Navigator>
    );
}

export default NotificationsStack;