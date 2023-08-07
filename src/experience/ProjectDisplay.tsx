import React from 'react';
import { Card, Row } from 'react-bootstrap';

import '../fonts.css';
import SimpleCol from '../SimpleCol';
import projectData from './data/projects.json';
import ProjectCard from './ProjectCard';
import './ProjectDisplay.css';


const ProjectDisplay: React.FC = () => {
  const projectRows = projectData.map((proj, index) => {
    if (index % 2 !== 0) {
      // We've already processed this project
      return null;
    }
    let secondProj;
    if (index !== projectData.length - 1) {
      secondProj = projectData[index + 1];
    }

    return (
      <div>
        <Row key={proj.name} className='row-eq-height proj-row hide-on-sm'>
          <SimpleCol className='lg-project'>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </SimpleCol>
          {secondProj &&
           <SimpleCol className='lg-project'>
             <ProjectCard name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
           </SimpleCol>
          }
        </Row>
        <Row key={proj.name} className='row-eq-height proj-row hide-on-lg'>
          <SimpleCol className='sm-project'>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </SimpleCol>
        </Row>
        {secondProj &&
         <Row key={proj.name + '2'} className='row-eq-height proj-row hide-on-lg'>
           <SimpleCol className='sm-project'>
             <ProjectCard name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
         </SimpleCol>
         </Row>
          }
      </div>
    );

  });

  return (
      <div className='experience-section'>
          <Row className='heading ultra' id='projects'>
              Selected Projects
          </Row>
          <Row>
              <Card className='glass-panel ultra'>
                  {projectRows}
              </Card>
          </Row>
      </div>
  );
}

export default ProjectDisplay;

