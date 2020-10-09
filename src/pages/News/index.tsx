import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Items from '../../components/Items';

function News() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" needGoBackButton={false}/>
            <Items />
        </View>
    );
}

export default News;