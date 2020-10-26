import React from 'react';
import { useRoute } from '@react-navigation/native';

import Schedule from '../pages/Schedule';
import Account from '../pages/Account';

import { useAuth } from '../contexts/auth';
import AuthRoutes from './AuthRoutes';

function SignInRequired() {
    const route = useRoute();

    const { signed } = useAuth();

    if (signed && route.name == "Schedule") {
        return <Schedule />;
    } else if (signed && route.name == "Account"){
        return <Account />;
    } else {
        return <AuthRoutes />;
    }
}

export default SignInRequired;