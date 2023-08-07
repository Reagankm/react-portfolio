import React from 'react';
import { Container } from 'react-bootstrap';

import '../fonts.css';
import './Experience.css';

import EmploymentHistory from './EmploymentHistory';
import { renderProjects } from './Project';
import SkillDisplay from './SkillDisplay';

const Experience = () => {

    return (
        <div className='experience-container'>
            <EmploymentHistory />
            <SkillDisplay />
            {renderProjects()}
        </div>
    );

}


export default Experience;
