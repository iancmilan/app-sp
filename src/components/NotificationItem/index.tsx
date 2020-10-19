import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function NotificationItem() {
    const { navigate } = useNavigation();

    function handleNavigateToNotificationDetailsPage() {
        navigate('NotificationDetails');
    }
        
    return (
        <>
            <TouchableOpacity onPress={handleNavigateToNotificationDetailsPage}>
                <View style={styles.notificationWrapper}>
                    <Text style={styles.notificationTitle}>
                        Título
                    </Text>
                    <Text style={styles.notificationSummary}>
                        Resumo: Google Notícias é um agregador de notícias e 
                        aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                        contínuo e personalizável de artigos organizados a partir de...
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default NotificationItem; 