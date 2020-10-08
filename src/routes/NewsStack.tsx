import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import News from '../pages/News';
import NewsItem from '../pages/NewsItem';

const { Navigator, Screen } = createStackNavigator();

function NewsStack() {
    return (
        <Navigator initialRouteName="News" screenOptions={{ headerShown: false }}>
            <Screen name="News" component={News}></Screen>
            <Screen name="NewsItem" component={NewsItem}></Screen>
        </Navigator>
    );
}

export default NewsStack;