import React from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import NewsItem from '../../components/NewsItem';
import DateHeader from '../../components/DateHeader';

import styles from './styles';

function News() {
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" />
            <ScrollView style={styles.newsWrapper}>
                <DateHeader date="Hoje 10 de outubro"/>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </ScrollView>
        </View>
    );
}

export default News;