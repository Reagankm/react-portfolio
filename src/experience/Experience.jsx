import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { renderEmploymentHistory } from './Employment';
import { renderProjects } from './Project';

import './Experience.css';
import '../fonts.css';

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

        return (
            <Grid>
                {renderEmploymentHistory()}
                <Row className='heading ultra' id='skills'>
                    Skills
                </Row>
                <Row>
                    <Panel className='glass-panel ultra'>
                        <Row>
                            <Col xs={4}>
                                <Skills heading='Top Skills' technology={['Java', 'Spring Boot', 'MongoDB', 'Git']}/>
                            </Col>
                            <Col xs={4}>
                                <Skills heading='Secondary Skills'
                                        technology={['Android', 'Unix Shell Scripting', 'Mockito', 'Lombok', 'Swagger', 'Gradle']}/>
                            </Col>
                            <Col xs={4}>
                                <Skills heading="Other Tech I've Worked With"
                                        technology={['Python', 'Dart', 'Flutter', 'C', 'C++', 'MySQL', 'PHP', 'Maven']}/>
                            </Col>
                        </Row>

                    </Panel>
                </Row>
                {renderProjects()}
            </Grid>
        );
    }

}

export default Experience;
