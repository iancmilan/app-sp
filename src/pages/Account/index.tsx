import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import avatarImg from '../../assets/avatar.png';

import styles from './styles';

function Account() {
    return (
        <View style={styles.container}>
            <PageHeader title="Minha conta" />
            <View style={styles.profile}>
                <Image  style={styles.avatar} source={avatarImg} resizeMode="contain"></Image>
                <Text style={styles.name}>Nome: Ian Carlos Milan</Text>
                <Text style={styles.email}>E-mail: iancmilan@unochapeco.edu.br</Text>
            </View>
            <View style={styles.buttonContainer}>
                <RectButton style={styles.buttonLogOut}>
                    <Text style={styles.buttonLogOutText}>Sair</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Account;