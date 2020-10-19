import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Items from '../../components/Items';

function News() {
    const { navigate } = useNavigation();

    function handleNavigateToNewsDetailsPage() {
        navigate('NewsDetails');
    }
    
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" />
            {/* <Items /> */}
            <Button title="News Details" onPress={handleNavigateToNewsDetailsPage}></Button>
        </View>
    );
}

export default News;