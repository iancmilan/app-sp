import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import NewsItem from '../../components/NewsItem';
import DateHeader from '../../components/DateHeader';

import styles from './styles';

interface NewsItems {
    month: Array<{
        date: Date;
        content: Array<{
          _id: string;
          title: string;
          summary: string;
        }>
    }>;
}

function News() {
    const [news, setNews] = useState<NewsItems>({
        month : [
            {
              date: new Date("2020-01-01T03:00:00.000Z"),
              content:[
                {
                  _id:"5f7378933e2c9f63ee7c83dd",
                  title: 'Notícia 1',
                  summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                },
                {
                _id:"44if78933e2c9f63ee7c83dd",
                title: 'Notícia 2',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ]
            },
            {
              date: new Date("2020-01-02T03:00:00.000Z"),
              content:[
                {
                _id:"2ae47378933e2c9f63ee7c83dd",
                title: 'Notícia 3',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ]
            },
            {
              date: new Date("2020-01-03T03:00:00.000Z"),
              content:[],
            },
            {
              date: new Date("2020-01-04T03:00:00.000Z"),
              content:[],
            },
            {
              date: new Date("2020-01-05T03:00:00.000Z"),
              content:[],
            },
            {
              date: new Date("2020-01-06T03:00:00.000Z"),
              content:[
                {
                _id:"127378933e2c9f63ee7c83dd",
                title: 'Notícia 4',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ],
            },
            {
              date: new Date("2020-10-26T03:00:00.000Z"),
              content:[
                {
                _id:"987378933e2c9f63ee7c83dd",
                title: 'Notícia 5',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ],
            },
            {
              date: new Date("2020-10-28T03:00:00.000Z"),
              content:[
                {
                _id:"7f7378933e2c9f63ee7c83dd",
                title: 'Notícia 6',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ],
            },
            {
              date: new Date("2020-10-29T03:00:00.000Z"),
              content:[
                {
                _id:"8jd378933e2c9f63ee7c83dd",
                title: 'Notícia 7',
                summary: 'Google Notícias é um agregador de notícias e aplicativo desenvolvido pela Google. Ele apresenta um fluxo contínuo e personalizável de artigos organizados a partir de...',
                }
              ],
            }
        ]
    });

    const today = new Date();
    today.setHours(0,0,0,0);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    yesterday.setHours(0,0,0,0);

    return (
        <View style={styles.container}>
            <PageHeader title="Notícias" />
            <ScrollView style={styles.newsWrapper}>
                {news.month.map((item, index) => {
                    if(item.content.length > 0){
                        return (
                            <View key={`${item.date}${index}`}>
                                <DateHeader date={`${today.getTime() == item.date.getTime() ? "Hoje" : ''}${yesterday.getTime() == item.date.getTime() ? "Ontem" : ''} ${
                                new Intl.DateTimeFormat("pt-BR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                }).format(item.date)
                                }`} />
                                {item.content.map(content => <NewsItem key={content._id} news={content}/>)}
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
}

export default News;