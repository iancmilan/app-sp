import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface ScheduleItem {
  hour: string;
  processNumber: string;
  expertName: string;
  place: string;
}

interface Schedule {
  content: ScheduleItem;
}

const ScheduleItem:React.FC<Schedule> = ({ content }) => {
  return (
    <View style={styles.scheduleWrapper}>
      <Text style={styles.subject}>Assunto: {`${content.expertName} - ${content.processNumber}`} </Text>
      <Text style={styles.time}>Horário: {content.hour} </Text>
      <Text style={styles.place}>Local: {content.place} </Text>
    </View>
  );
}

export default ScheduleItem; 