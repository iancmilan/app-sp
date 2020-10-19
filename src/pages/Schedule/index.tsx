import React from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import ScheduleItem from '../../components/ScheduleItem';
import Date from '../../components/Date';

import styles from './styles';

function Schedule() {

  return (
    <View style={styles.container}>
      <PageHeader title="Agenda" />
      <ScrollView style={styles.scheduleWrapper}>
        <Date date="Hoje 20 de outubro"/>
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </ScrollView>
    </View>
  );
}

export default Schedule;