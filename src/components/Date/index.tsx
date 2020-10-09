import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface DateProps {
    date: string;
}

const Date:React.FC<DateProps> = ({ date }) => {
    return (
        <View style={styles.dayWrapper}>
            <Text style={styles.day}>{ date }</Text>
        </View>
    );
}

export default Date;