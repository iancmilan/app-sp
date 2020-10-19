import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import News from '../pages/News';
import NewsDetails from '../pages/NewsDetails';

const { Navigator, Screen } = createStackNavigator();

function NewsStack() {
    return (
        <Navigator initialRouteName="News" screenOptions={{ headerShown: false }}>
            <Screen name="News" component={News}></Screen>
            <Screen name="NewsDetails" component={NewsDetails}></Screen>
        </Navigator>
    );
}

export default NewsStack;