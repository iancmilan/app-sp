import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Notifications() {
    const { navigate } = useNavigation();

    function handleNavigateToNotificationsItemPage() {
        navigate('NotificationsItem');
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Notificações" needGoBackButton={false}/>
            <Button title="Notifications Item" onPress={handleNavigateToNotificationsItemPage}></Button>
        </View>
    );
}

export default Notifications;