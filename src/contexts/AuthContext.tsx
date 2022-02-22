import React, { createContext, useContext, useState } from 'react';
import { LoginInput, User } from '../types';

interface AuthContextProps {
    data: User | undefined;
    login(data: LoginInput): void;
    logout(): void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [data, setData] = useState<User | undefined>(undefined);

    const login = (data: LoginInput): void => {
        if (data.username === 'admin' && data.password === 'password') {
            setData({ id: 1, username: 'admin', firstName: 'Andrew', lastName: 'Dyer' });
        }
    };

    const logout = (): void => {
        setData(undefined);
    };

    return <AuthContext.Provider value={{ data, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
