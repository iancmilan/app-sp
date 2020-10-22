import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn} ></Screen>
        </Navigator>
    );
}

export default AuthRoutes;