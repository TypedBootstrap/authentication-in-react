import React, { createContext, useContext } from 'react';
import { User } from '../types';
import { useAuth } from './AuthContext';

export const UserContext = createContext(undefined as User | undefined);

interface UserProviderProps {}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { data } = useAuth();

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
