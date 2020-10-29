import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface NotificationItem {
    module: {
        module_id: string,
        module_name:string,
    },
    _id: string,
    createAt: Date,
    description: string,
    identifier: string,
    url: string,
}

interface Notification {
    notification: NotificationItem
}

const NotificationItem:React.FC<Notification> = ({ notification }) => {
    const { navigate } = useNavigation();

    function handleNavigateToNotificationDetailsPage(id: string) {
        navigate('NotificationDetails', { id });
    }
        
    return (
        <>
            <TouchableOpacity onPress={() => handleNavigateToNotificationDetailsPage(notification._id)}>
                <View style={styles.notificationWrapper}>
                    <Text style={styles.notificationTitle}>{`${notification.createAt.toLocaleDateString()} - ${notification.module.module_name}`}</Text>
                    <Text style={styles.notificationSummary}>{notification.description}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default NotificationItem; 