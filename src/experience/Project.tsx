import React, { PropsWithChildren } from 'react';
import { Badge, Row, Col, Card } from 'react-bootstrap';

import projectData from './data/projects.json';
import './Project.css';
import '../fonts.css';

type Props = PropsWithChildren<{
    name: string,
    technology: string[],
    description: string,
    oneLine: string,
    company: string,
}>;

const Project: React.FC<Props> = (props: Props) => {

  return (
    <Card className='project'>
      <div className='section project-heading'>
        <div className='project-name ultra'>
          {props.name}
        </div>
        <div className='project-company cinzel'>
          {props.company}
        </div>
      </div>
      <div className='section'>
        <div className='project-one-line bai'>
          {props.oneLine}
        </div>
        <div className='project-tech nova-mono'>
          {props.technology.map((tech) => {
            return (
              <Badge key={tech}>
                {tech}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className='project-description bai'>
        {props.description}
      </div>
    </Card>
  );
}

export const renderProjects = () => {
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
            <Project name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </Col>
          {secondProj &&
           <Col xs={6}>
             <Project name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
           </Col>
          }
        </Row>
        <Row key={proj.name} className='row-eq-height proj-row hide-on-lg'>
          <Col xs={10} xsOffset={1}>
            <Project name={proj.name} technology={proj.technology} oneLine={proj.oneLiner} description={proj.description} company={proj.company} />
          </Col>
        </Row>
        {secondProj &&
         <Row key={proj.name + '2'} className='row-eq-height proj-row hide-on-lg'>
           <Col xs={10} xsOffset={1}>
             <Project name={secondProj.name} technology={secondProj.technology} oneLine={secondProj.oneLiner} description={secondProj.description} company={secondProj.company} />
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

