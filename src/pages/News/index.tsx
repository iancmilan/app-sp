import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function News() {
    const { navigate } = useNavigation();

    function handleNavigateToNewsItemPage() {
        navigate('NewsItem');
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" needGoBackButton={false}/>
            <Button title="News Item" onPress={handleNavigateToNewsItemPage}></Button>
        </View>
    );
}

export default News;