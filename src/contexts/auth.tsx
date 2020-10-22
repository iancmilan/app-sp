import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:React.FC = ({ children }) => {
    //esse useState pode armazenar tanto um objeto, que é quando o usuário está logado, quanto nulo, que é quando o usuário não está logado.
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser =  await AsyncStorage.getItem('@AppSP:user');
            const storagedToken = await AsyncStorage.getItem('@AppSP:token');

            if(storagedUser && storagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
        }

        loadStorageData();
    }, []);

    async function signIn() {
        const response = await auth.singIn();

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@AppSP:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@AppSP:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        // se existir alguma coisa dentro do user, signed será true, seria a mesma coisa de utilizar desse jeito Boolean(user)
        <AuthContext.Provider value={{signed: !!user, user: user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}