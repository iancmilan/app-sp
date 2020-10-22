import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../contexts/auth';

import PageHeader from '../../components/PageHeader';

import avatarImg from '../../assets/avatar.png';

import styles from './styles';

function Account() {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Minha conta" />
            <View style={styles.profile}>
                <Image  style={styles.avatar} source={avatarImg} resizeMode="contain"></Image>
                <Text style={styles.name}>Nome: {user?.name} </Text>
                <Text style={styles.email}>E-mail: {user?.email}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <RectButton style={styles.buttonLogOut} onPress={handleSignOut}>
                    <Text style={styles.buttonLogOutText}>Sair</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Account;