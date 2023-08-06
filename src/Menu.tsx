import React, {
  Component,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { Nav, Navbar, NavItem, Card } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';

import './Menu.css';
import './fonts.css';
//import { useLocation } from 'react-router-dom';

type Props = PropsWithChildren<{

}>;

const Menu: React.FC<Props> = (props: Props) => {
  const [currentScrollHeight, setCurrentScrollHeight] = useState<number | undefined>();
  const [current, setCurrent] = useState<string | undefined >();


  const updateCurrent = (selectedKey: string | null) => {
    if (selectedKey !== null) {
      console.log('Menu - updating selectedKey to ' + selectedKey);
      setCurrent(selectedKey);
    }
  }

  //state = { currentScrollHeight: window.scrollY };

  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      if (currentScrollHeight !== newScrollHeight){
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  }, [currentScrollHeight])

  // Menu grows more opaque as you scroll down but never is less than its
  // original .4 opacity.
  const opacity = currentScrollHeight === undefined ? 1.00 :
      Math.max(1.00 - (100 / currentScrollHeight), .4);
  const backgroundColor = `rgba(255, 255, 255, ${opacity})`;

  return (
    <div className='glass-nav ultra' //style={{backgroundColor}}>
      >

      <Navbar className="centeredNav navbar-default">
        <Nav activeKey={'/'}
             onSelect={(selectedKey) => updateCurrent(selectedKey)}>

          <Nav.Item>
            <Nav.Link href='/'
                      eventKey='0'>
              <p className="subtitle">Home</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/experience'
                      eventKey='1'>
              <p className="subtitle">Experience</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/contact'
                      eventKey='2'>
              <p className="subtitle">Contact</p>
            </Nav.Link>
          </Nav.Item>


          {/*<LinkContainer to='/'>*/}
          {/*  <NavItem eventKey="0">*/}
          {/*    <p className="subtitle">Home</p>*/}
          {/*  </NavItem>*/}
          {/*</LinkContainer>*/}
          {/*<LinkContainer to='/experience'>*/}
          {/*  <NavItem eventKey="1">*/}
          {/*    <p className="subtitle">Experience</p>*/}
          {/*  </NavItem>*/}
          {/*</LinkContainer>*/}
          {/*<LinkContainer to='/contact'>*/}
          {/*  <NavItem eventKey="2">*/}
          {/*    <p className="subtitle">Contact</p>*/}
          {/*  </NavItem>*/}
          {/*</LinkContainer>*/}

        </Nav>
      </Navbar>

    {/*  <div className='menuHeadline cinzel'>*/}
    {/*    <Card className='well'>*/}
    {/*      <Card.Body>*/}
    {/*        {getHeadline(props.currentPath)}*/}
    {/*      </Card.Body>*/}
    {/*    </Card>*/}
    {/*  </div>*/}
    </div>
  );

}

export default Menu;
