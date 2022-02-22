import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { LoginForm } from '../components/LoginForm';
import { useAuth } from '../contexts/AuthContext';

export const LoginPage: React.FC = () => {
    const auth = useAuth();

    return (
        <div className="LoginPage">
            <Container className="ps-md-0" fluid>
                <Row className="g-0">
                    <Col className="d-none d-md-flex bg-image" md="4" lg="6"></Col>
                    <Col md="8" lg="6">
                        <div className="login d-flex align-items-center py-5">
                            <Container>
                                <Row>
                                    <Col className="mx-auto" md="9" lg="8">
                                        <h3 className="mb-4">Welcome Back</h3>
                                        <LoginForm handleSubmit={auth.login} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
