import React from 'react';
import {  View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import styles from './styles';

interface PageHeaderProps {
    title: string;
    goBackButton?: boolean;
}

const PageHeader:React.FC<PageHeaderProps> = ({ title, goBackButton = false }) => {
    const { goBack, dispatch } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    function handleClickMenu() {
        dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {
                    goBackButton?
                    <BorderlessButton onPress={handleGoBack}>
                        <Feather name="corner-up-left" size={20} color="#FFF" />
                    </BorderlessButton>
                    : <View />
                }
                
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <BorderlessButton onPress={handleClickMenu}>
                    <Feather name="menu" size={20} color="#FFF" />
                </BorderlessButton>
            </View>
        </View>
    );
}

export default PageHeader;