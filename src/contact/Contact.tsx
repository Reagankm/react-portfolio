import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

import '../fonts.css';
import './Contact.css';
import bluePortrait from './web-portrait.jpeg';

const Contact: React.FC = () => {

    return (
        <Card className='contact-panel ultra'>

            <div className='contact-details'>

                <div className='info cinzel'>
                    Want more information or to get in touch?
                </div>

                <div className='button-row'>
                    <a href='https://drive.google.com/file/d/1fiLAaHqjPCJ2ogG7qpc5ZWa4eq-_SRWE/view?usp=sharing'
                       target='_blank'>
                        <button>
                            Resume
                            <br />
                            <span className="fa-stack fa-lg fa-layers fa-fw">
                                <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                                <FontAwesomeIcon className='fa fa-stack-1x inner'
                                                 icon={faFileAlt} color='white' />
                              </span>
                        </button>
                    </a>
                    <a href='http://linkedin.com/in/reagankm' target='_blank'>
                        <button>
                            LinkedIn
                            <br />
                            <span className="fa-stack fa-lg fa-layers fa-fw">
                                <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                                <FontAwesomeIcon className='fa fa-stack-1x inner'
                                                 icon={faLinkedin} color='white' />
                              </span>
                        </button>
                    </a>
                    <a href='http://www.github.com/reagankm' target='_blank'>
                        <button>
                            GitHub
                            <br />
                            <span className="fa-stack fa-lg fa-layers fa-fw">
                                <FontAwesomeIcon className='fa fa-stack-2x' icon={faCircle} />
                                <FontAwesomeIcon className='fa fa-stack-1x inner'
                                                 icon={faGithubAlt} color='white' />
                              </span>
                        </button>
                    </a>
                </div>

                <div className='email'>
                    Email me at <a
                    href='mailto:reagankm@gmail.com'>reagankm@gmail.com</a>
                </div>

            </div>

            <div className='portrait-frame'>
                <img className='portrait' src={bluePortrait}
                     alt="Smiling Reagan Middlebrook" />
            </div>
        </Card>
    );

}

export default Contact;
