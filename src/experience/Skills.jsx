import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

import skillData from './data/skills.json';
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

export function renderSkills() {
    return (
        <div>
            <Row className='heading ultra' id='skills'>
                Skills
            </Row>
            <Row>
                <Panel className='glass-panel ultra'>
                    <Row>
                        {skillData.map((skillCategory) => {
                            return (
                            <Col xs={4}>
                                <Skills heading={skillCategory.type} technology={skillCategory.values}/>
                            </Col>
                            );
                        })}
                    </Row>

                </Panel>
            </Row>
        </div>
    );
}
