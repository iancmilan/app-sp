import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface NewsItem {
    _id: string;
    title: string;
    summary: string;
}

interface News {
    news: NewsItem;
}

const NewsItem:React.FC<News> = ({ news }) => {
    const { navigate } = useNavigation();

    function handleNavigateToNewsDetailsPage(id: string) {
        navigate('NewsDetails', { id });
    }
        
    return (
        <>
            <TouchableOpacity onPress={() => handleNavigateToNewsDetailsPage(news._id)}>
                <View style={styles.newsWrapper}>
                    <Text style={styles.newsTitle}>{news.title}</Text>
                    <Text style={styles.newsSummary}>{news.summary}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default NewsItem; 