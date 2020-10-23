import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface DateHeaderProps {
    date: string;
}

const DateHeader:React.FC<DateHeaderProps> = ({ date }) => {
    return (
        <View style={styles.dayWrapper}>
            <Text style={styles.day}>{ date }</Text>
        </View>
    );
}

export default DateHeader;