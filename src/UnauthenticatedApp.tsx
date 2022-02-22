import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';

interface UnauthenticatedAppProps {}

export const UnauthenticatedApp: React.FC<UnauthenticatedAppProps> = () => (
    <div className="UnauthenticatedApp">
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </div>
);
