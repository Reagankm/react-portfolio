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
      <div key={'projRow' + index}>
        <Row key={proj.name + '_hideOnSmall'} className='row-eq-height proj-row hide-on-sm'>
          <SimpleCol key={'firstProj'} className='lg-project'>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </SimpleCol>
          {secondProj &&
           <SimpleCol key={'secondProj'} className='lg-project'>
             <ProjectCard name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
           </SimpleCol>
          }
        </Row>
        <Row key={proj.name + '_hideOnLg'} className='row-eq-height proj-row hide-on-lg'>
          <SimpleCol className='sm-project'>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </SimpleCol>
        </Row>
        {secondProj &&
         <Row key={proj.name + '_hideOnLg2'} className='row-eq-height proj-row hide-on-lg'>
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
          <Row key={'heading'} className='heading ultra' id='projects'>
              Selected Projects
          </Row>
          <Row key={'panelDisplay'}>
              <Card className='glass-panel ultra'>
                  {projectRows}
              </Card>
          </Row>
      </div>
  );
}

export default ProjectDisplay;

