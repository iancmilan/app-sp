import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function NewsDetails() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" goBackButton={true}/>
            <Text>News Details</Text>
        </View>
    );
}

export default NewsDetails;