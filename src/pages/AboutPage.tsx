import React from 'react';
import { Container } from 'reactstrap';

export const AboutPage: React.FC = () => {
    return (
        <div className="AboutPage">
            <Container>
                <h3>About</h3>
                <p>Only authenticated users can see this page!</p>
            </Container>
        </div>
    );
};
