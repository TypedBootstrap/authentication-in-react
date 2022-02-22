import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavLink, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Navigation">
            <Navbar color="dark" expand="md" dark>
                <NavbarBrand tag={Link} to="/">
                    App
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
