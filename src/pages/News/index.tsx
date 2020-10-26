import React from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import NewsItem from '../../components/NewsItem';
import DateHeader from '../../components/DateHeader';

import styles from './styles';

function News() {
    const today = new Date();
    
    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" />
            <ScrollView style={styles.newsWrapper}>
                <DateHeader date={
                  new Intl.DateTimeFormat("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                  }).format(today)}/>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </ScrollView>
        </View>
    );
}

export default News;