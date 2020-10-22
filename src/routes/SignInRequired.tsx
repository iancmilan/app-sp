import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './AuthRoutes';
import Schedule from '../pages/Schedule';

function SignInRequired() {
    const { signed } = useAuth();

    return signed ? <Schedule /> : <AuthRoutes />;
}

export default SignInRequired;