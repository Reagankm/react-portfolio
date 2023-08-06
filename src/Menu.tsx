import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Menu.css';
import './fonts.css';
import { Link } from 'react-router-dom';

type Props = PropsWithChildren<{
    // currentPath: string;
}>;

const Menu: React.FC<Props> = (props) => {
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
                        {/*<Nav.Link eventKey='0' href='/'>Home</Nav.Link>*/}
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/experience'}>Experience</Link>
                        {/*<Nav.Link eventKey='1' href='/experience'>Experience</Nav.Link>*/}
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/contact'}>Contact</Link>
                        {/*<Nav.Link eventKey='2' href='/contact'>Contact</Nav.Link>*/}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;
