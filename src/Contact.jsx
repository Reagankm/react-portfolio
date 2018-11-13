import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/less/font-awesome.less';

import portrait from './boat-opt.jpg';

import './Contact.css';
import './fonts.css';

class Contact extends Component {

  componentDidMount() {
    document.body.style.overflow = 'visible';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'hidden';
  }

  render() {
    return (
      <Panel className='contact-panel ultra'>


        <div className='contact-details'>

          <div className='cinzel info'>
            Want more information or to get in touch?
          </div>


          <div className='button-row'>
            <ButtonToolbar>
              <Button bsStyle='default' href='https://drive.google.com/file/d/1fiLAaHqjPCJ2ogG7qpc5ZWa4eq-_SRWE/view?usp=sharing' target='_blank'>
                Resume
                <br />
                <span className="fa-stack fa-lg" >
                  <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa fa-stack-1x inner' icon={faFileAlt} />
                </span>
              </Button>

              <Button bsStyle='default' href='http://linkedin.com/in/reagankm' target='_blank'>
                LinkedIn
                <br />
                <span className="fa-stack fa-lg" >
                  <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa fa-stack-1x inner' icon={faLinkedin} />
                </span>
              </Button>

              <Button bsStyle='default' href='http://www.github.com/reagankm' target='_blank'>
                GitHub
                <br />
                <span className="fa-stack fa-lg" >

                  <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa fa-stack-1x inner' icon={faGithubAlt} />

                </span>
              </Button>

            </ButtonToolbar>

          </div>


          <div className='email'>
            Email me at <a href='mailto:reagankm@gmail.com'>reagankm@gmail.com</a>
          </div>

        </div>

        <div className='portrait-frame'>
          <img className='portrait' src={portrait} alt="Portrait of Reagan Middlebrook" />
        </div>
      </Panel>
    );
  }
}

export default Contact;
