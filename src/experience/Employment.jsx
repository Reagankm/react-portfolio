import React from 'react';
import { Row, Panel } from 'react-bootstrap';

import './Employment.css';
import '../fonts.css';

// company: string, image: imported file, title: string, and dates: string
export function WorkExperience(props) {

  return (
      <Panel className='work-exp-panel ultra'>
        <Row className='exp-company'>{props.company}</Row>
        <Row className='exp-image'>
          <img src={props.image} alt='' />
        </Row>

        <Row>{props.title}</Row>
        <Row className='subtitle cinzel'>{props.dates}</Row>

      </Panel>
  );
}
