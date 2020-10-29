import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

interface NotificarionDetailsRouteParams {
    id: string;
}

function NotificationDetails() {
    const route = useRoute();
    const params = route.params as NotificarionDetailsRouteParams;

    useEffect(() => {
        //aqui faria uma call na api para pegar a notificação com o params.id
    }, [params.id]);

    return (
        <View style={styles.container}>
            <PageHeader title="Notificações" goBackButton={true} />
            <Text>NotificationDetails ID: {`${params.id}`} </Text>
        </View>
    );
}

export default NotificationDetails;