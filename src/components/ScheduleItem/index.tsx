import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function ScheduleItem() {
  return (
    <View style={styles.scheduleWrapper}>
      <Text style={styles.subject}>Assunto:</Text>
      <Text style={styles.time}>Horário:</Text>
      <Text style={styles.place}>Local:</Text>
    </View>
  );
}

export default ScheduleItem; 