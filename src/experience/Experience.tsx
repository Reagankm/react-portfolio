import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { renderEmploymentHistory } from './Employment';
import { renderProjects } from './Project';


import './Experience.css';
import '../fonts.css';
import SkillDisplay from './SkillDisplay';

const Experience = () => {

    useEffect(() => {
        document.body.style.overflow = 'visible';
        return () => {
            document.body.style.overflow = 'hidden';
        }
    }, []);

    return (
        <Container>
            {renderEmploymentHistory()}
            <SkillDisplay />
            {renderProjects()}
        </Container>
    );

}


export default Experience;
