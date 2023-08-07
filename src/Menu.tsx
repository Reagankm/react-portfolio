import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './fonts.css';
import './Menu.css';

const Menu: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string | undefined>()

    useEffect(() => {
        setActiveKey('/');
    }, []);

    const onSelect = (eventKey: string) => {
        setActiveKey(eventKey);
    }

    // Use react-router Links instead of react-bootstrap Nav.Link so that react-router
    // will do its magic and only load the components that are different instead of
    // reloading everything
    return (
        <Navbar expand='md ultra'>
            <Container>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item>
                        <Link to={'/'}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/experience'}>Experience</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/contact'}>Contact</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;
