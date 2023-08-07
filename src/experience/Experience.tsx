import React from 'react';

import '../fonts.css';
import EmploymentHistory from './EmploymentHistory';
import './Experience.css';
import ProjectDisplay from './ProjectDisplay';
import SkillDisplay from './SkillDisplay';

const Experience = () => {

    return (
        <div className='experience-container'>
            <EmploymentHistory />
            <SkillDisplay />
            <ProjectDisplay />
        </div>
    );

}


export default Experience;
