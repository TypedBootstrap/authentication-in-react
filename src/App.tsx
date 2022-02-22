import React from 'react';
import { AuthenticatedApp } from './AuthenticatedApp';
import { useUser } from './contexts/UserContext';
import { UnauthenticatedApp } from './UnauthenticatedApp';

export const App: React.FC = () => {
    const user = useUser();

    if (user) {
        return <AuthenticatedApp />;
    }

    return <UnauthenticatedApp />;
};
