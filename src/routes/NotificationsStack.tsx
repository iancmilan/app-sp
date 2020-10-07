import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../pages/Notifications';
import NotificationsItem from '../pages/NotificationsItem';

const { Navigator, Screen } = createStackNavigator();

function NotificationsStack() {
    return (
        <Navigator initialRouteName="Notifications">
            <Screen name="Notifications" component={Notifications}></Screen>
            <Screen name="NotificationsItem" component={NotificationsItem}></Screen>
        </Navigator>
    );
}

export default NotificationsStack;