import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Schedule() {
    return (
        <View style={styles.container}>
            <PageHeader title="Agenda" needGoBackButton={false}/>
        </View>
    );
}

export default Schedule;