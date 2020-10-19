import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function NewsItem() {
    const { navigate } = useNavigation();

    function handleNavigateToNewsDetailsPage() {
        navigate('NewsDetails');
    }
        
    return (
        <>
            <TouchableOpacity onPress={handleNavigateToNewsDetailsPage}>
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
        </>
    );
}

export default NewsItem; 