import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Menu.css';
import './fonts.css';

class Menu extends Component {

  getHeadline(path) {
    const mapPathToHeadline = {
      '/': 'I Build Software',
      '/experience': 'I\'m Good at It',
      '/contact': 'Reach Me Here'
    };

    return mapPathToHeadline[path];
  }

  state = { currentScrollHeight: window.scrollY };

  componentDidMount () {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      if (this.state.currentScrollHeight !== newScrollHeight){
        this.setState({currentScrollHeight: newScrollHeight});
      }
    };
  }

  render() {
    // Menu grows more opaque as you scroll down but never is less than its
    // original .4 opacity.
    const opacity = Math.max(1.00 - (100 / this.state.currentScrollHeight), .4);
    const backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    return (
      <div className='glass-nav ultra' style={{backgroundColor}}>

        <Navbar className="centeredNav">
          <Nav onSelect={(selectedKey) => this.updateCurrent(selectedKey)}>

            <LinkContainer to='/'>
              <NavItem eventKey="0">
                <p className="subtitle">Home</p>
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/experience'>
              <NavItem eventKey="1">
                <p className="subtitle">Experience</p>
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <NavItem eventKey="2">
                <p className="subtitle">Contact</p>
              </NavItem>
            </LinkContainer>

          </Nav>
        </Navbar>

        <div className='menuHeadline cinzel'>
          <Well>
            {this.getHeadline(this.props.currentPath)}
          </Well>
        </div>
      </div>
    );
  }

  updateCurrent(selectedKey) {
    this.setState({current: selectedKey});
  }
}

export default Menu;
