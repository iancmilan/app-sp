import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Account() {
    return (
        <View style={styles.container}>
            <PageHeader title="Minha conta" needGoBackButton={false}/>
        </View>
    );
}

export default Account;