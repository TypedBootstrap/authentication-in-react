import React from 'react';
import { Button, Container } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';

export const HomePage: React.FC = () => {
    const auth = useAuth();
    const user = useUser();

    return (
        <div className="HomePage">
            <Container>
                <h3>Welcome back, {user?.firstName}!</h3>
                <p>Only authenticated users can see this page!</p>
                <Button onClick={auth.logout}>Logout</Button>
            </Container>
        </div>
    );
};
