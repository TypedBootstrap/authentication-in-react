import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

interface AuthenticatedAppProps {}

export const AuthenticatedApp: React.FC<AuthenticatedAppProps> = () => (
    <div className="AuthenticatedApp">
        <Navigation />
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
);
