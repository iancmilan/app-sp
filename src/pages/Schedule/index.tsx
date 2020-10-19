import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import ScheduleItem from '../../components/ScheduleItem';

import styles from './styles';

function Schedule() {

  return (
    <View style={styles.container}>
      <PageHeader title="Agenda" needGoBackButton={false} />
      <ScheduleItem />
    </View>
  );
}

export default Schedule;