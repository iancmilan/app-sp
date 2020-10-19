import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import NotificationItem from '../../components/NotificationItem';
import Date from '../../components/Date';

import styles from './styles';

function Notifications() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notificações" />
            <ScrollView style={styles.notificationsWrapper}>
                <Date date="Hoje 20 de outubro"/>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollView>
        </View>
    );
}

export default Notifications;