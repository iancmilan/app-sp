import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function NotificationsItem() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notificações" goBackButton={true} />
        </View>
    );
}

export default NotificationsItem;