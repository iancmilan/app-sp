import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function News() {
    const { navigate } = useNavigation();

    function handleNavigateToNewsItemPage() {
        navigate('NewsItem');
    }
    return (
        <View style={styles.container}>
            <Text>News</Text>
            <Button title="News Item" onPress={handleNavigateToNewsItemPage}></Button>
        </View>
    );
}

export default News;