import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Notifications() {
    const { navigate } = useNavigation();

    function handleNavigateToNotificationsItemPage() {
        navigate('NotificationsItem');
    }

    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
            <Button title="Notifications Item" onPress={handleNavigateToNotificationsItemPage}></Button>
        </View>
    );
}

export default Notifications;