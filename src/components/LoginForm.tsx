import React from 'react';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { LoginInput } from '../types';

interface LoginFormProps {
    handleSubmit(data: LoginInput): void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
        {({ handleBlur, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                    />
                </FormGroup>
                <Button type="submit" color="primary" block>
                    Login
                </Button>
            </Form>
        )}
    </Formik>
);
