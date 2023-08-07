import React from 'react';
import { Container } from 'react-bootstrap';

import '../fonts.css';
import './Experience.css';

import { EmploymentHistory } from './Employment';
import { renderProjects } from './Project';
import SkillDisplay from './SkillDisplay';

const Experience = () => {

    return (
        <Container className='experience-container'>
            <EmploymentHistory />
            <SkillDisplay />
            {renderProjects()}
        </Container>
    );

}


export default Experience;
