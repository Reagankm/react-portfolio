import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import projectData from './data/projects.json';
import './ProjectDisplay.css';
import '../fonts.css';
import ProjectCard from './ProjectCard';


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
          <Col xs={6}>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </Col>
          {secondProj &&
           <Col xs={6}>
             <ProjectCard name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
           </Col>
          }
        </Row>
        <Row key={proj.name} className='row-eq-height proj-row hide-on-lg'>
          <Col xs={10} xsOffset={1}>
            <ProjectCard name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </Col>
        </Row>
        {secondProj &&
         <Row key={proj.name + '2'} className='row-eq-height proj-row hide-on-lg'>
           <Col xs={10} xsOffset={1}>
             <ProjectCard name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
         </Col>
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

