import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function NewsItem() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" goBackButton={true}/>
        </View>
    );
}

export default NewsItem;