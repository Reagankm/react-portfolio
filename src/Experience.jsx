import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { WorkExperience } from './Employment';
import { renderProjects } from './Project';

import chillah from './snap-ghost-yellow.png';
import g from './Google_G_Logo.svg';
import lissajous from './LL_Logo.png';
import indeed from './Indeed_Logo.png';

import './Experience.css';
import './fonts.css';

// heading: string, technology: string[]
function Skills(props) {

  return (
    <div>
      {props.heading}
      <p className='bai' style={{fontFamily: props.font}}>
        {props.technology.join(', ')}
      </p>
    </div>

  );
}

class Experience extends Component {

  componentDidMount() {
    document.body.style.overflow = 'visible';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'hidden';
  }

  render() {
    // Can't find a way to make columns equal height that also lets me use various column sizes. (Even in a column total of over 12, all cols are forced onto the same line.)
    // So, using display: none to selectively eliminate elements based on screen size.
    return (
      <Grid>
        <Row className='heading ultra' id='employment'>
          Employment History
        </Row>

        <Row className='exp-row-eq-height three-columns-per-row'>
          <Col sm={3}>
            <WorkExperience company='Indeed' image={indeed} title='Software Engineer' dates='Apr 2019 - present' />
          </Col>
          <Col sm={3}>
            <WorkExperience company='Snapchat' image={chillah} title='Software Engineer' dates='August 2017 - Apr 2019' />
          </Col>
          <Col sm={3}>
            <WorkExperience company='Google' image={g} title='Software Engineer' dates='Sep 2016 - Aug 2017' />
          </Col>
          <Col sm={3}>
            <WorkExperience company='MIT Lincoln Laboratory' image={lissajous} title='Research Intern' dates='June 2015 - Aug 2016' />
          </Col>
        </Row>

        <Row className='exp-row-eq-height two-columns-per-row'>
          <Col className='col-xxs-6'>
            <WorkExperience company='Snapchat' image={chillah} title='Software Engineer' dates='August 2017 - Present' />
          </Col>
          <Col className='col-xxs-6'>
            <WorkExperience company='Google' image={g} title='Software Engineer' dates='Sep 2016 - Aug 2017' />
          </Col>
        </Row>

        <Row className='exp-row-eq-height two-columns-per-row'>
          <Col className='col-xxs-offset-3 col-xxs-6'>
            <WorkExperience company='MIT Lincoln Laboratory' image={lissajous} title='Summer Research Intern' dates='June 2015 - Aug 2016' />
          </Col>
        </Row>


        <Row className='heading ultra' id='skills'>
          Skills
        </Row>
        <Row>
          <Panel className='glass-panel ultra'>
            <Row>
              <Col xs={4}>
      <Skills heading='Top Skills' technology={['Java', 'Spring Boot', 'MongoDB', 'Git']} />
              </Col>
              <Col xs={4}>
                <Skills heading='Secondary Skills' technology={['Android', 'Unix Shell Scripting', 'Mockito', 'Lombok', 'Swagger', 'Gradle']} />
              </Col>
              <Col xs={4}>
                <Skills heading="Other Tech I've Worked With" technology={['Python', 'Dart', 'Flutter', 'C', 'C++', 'MySQL', 'PHP', 'Maven']} />
              </Col>
            </Row>

          </Panel>
        </Row>

        <Row className='heading ultra' id='projects'>
          Selected Projects
        </Row>
        <Row>

          <Panel className='glass-panel ultra'>
            {renderProjects()}
          </Panel>
        </Row>

      </Grid>
    );
  }

}

export default Experience;
