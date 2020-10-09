import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Date from '../Date';

import styles from './styles';

function Items() {
    const { navigate } = useNavigation();

    function handleNavigateToNewsItemPage() {
        navigate('NewsItem');
    }
        
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.itemWrapper}>
                <Date date="Hoje 10 de outubro"/>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                    <Text style={styles.newsTitle}>
                        Título
                    </Text>
                    <Text style={styles.newsSummary}>
                        Resumo: Google Notícias é um agregador de notícias e 
                        aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                        contínuo e personalizável de artigos organizados a partir de...
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                    <Text style={styles.newsTitle}>
                        Título
                    </Text>
                    <Text style={styles.newsSummary}>
                        Resumo: Google Notícias é um agregador de notícias e 
                        aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                        contínuo e personalizável de artigos organizados a partir de...
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                        <Text style={styles.newsTitle}>
                            Título
                        </Text>
                        <Text style={styles.newsSummary}>
                            Resumo: Google Notícias é um agregador de notícias e 
                            aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                            contínuo e personalizável de artigos organizados a partir de...
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemWrapper}>
                <Date date="Hoje 10 de outubro"/>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                    <Text style={styles.newsTitle}>
                        Título
                    </Text>
                    <Text style={styles.newsSummary}>
                        Resumo: Google Notícias é um agregador de notícias e 
                        aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                        contínuo e personalizável de artigos organizados a partir de...
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                    <Text style={styles.newsTitle}>
                        Título
                    </Text>
                    <Text style={styles.newsSummary}>
                        Resumo: Google Notícias é um agregador de notícias e 
                        aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                        contínuo e personalizável de artigos organizados a partir de...
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToNewsItemPage}>
                    <View style={styles.newsWrapper}>
                        <Text style={styles.newsTitle}>
                            Título
                        </Text>
                        <Text style={styles.newsSummary}>
                            Resumo: Google Notícias é um agregador de notícias e 
                            aplicativo desenvolvido pela Google. Ele apresenta um fluxo 
                            contínuo e personalizável de artigos organizados a partir de...
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Items;