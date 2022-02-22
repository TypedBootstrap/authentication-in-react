import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

interface AppProviderProps {}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>
                <BrowserRouter>{children}</BrowserRouter>
            </UserProvider>
        </AuthProvider>
    );
};
