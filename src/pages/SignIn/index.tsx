import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../contexts/auth';

import logoImg from '../../assets/Logo.png';

import styles from './styles';

function SignIn() {
    const { signed, signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSingIn(){
        signIn();
    }
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logoImg} source={logoImg} />
            </View>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    placeholder="Senha"
                    placeholderTextColor="#000"
                />
                <RectButton style={styles.buttonLogin} onPress={handleSingIn}>
                    <Text style={styles.buttonLoginText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
            <BorderlessButton style={styles.buttonCreateAccount}>
                <Text style={styles.buttonCreateAccountText}>
                    Criar conta
                </Text>
            </BorderlessButton>
        </KeyboardAvoidingView>
    );
}

export default SignIn;