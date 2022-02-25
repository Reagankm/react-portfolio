import React from 'react';
import { Col, Row, Panel } from 'react-bootstrap';

import employmentHistory from './data/employment_history.json';
import './Employment.css';
import '../fonts.css';

// company: string, image: imported file, title: string, and dates: string
function Employer(props) {

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

export function renderEmploymentHistory() {
    const employerComponents = employmentHistory.map((employer) => {
        return <Employer company={employer.company} image={employer.image} title={employer.title} dates={employer.dates} />
    });

    // Can't find a way to make columns equal height that also lets me use various column sizes. (Even in a column total
    // of over 12, all cols are forced onto the same line.) So, using `display: none` to selectively eliminate elements
    // by class in response to screen size.
    return (
        <div>
            <Row className='heading ultra' id='employment'>
                Employment History
            </Row>
            <Row className='exp-row-eq-height four-columns-per-row'>
                {employerComponents.map((employer) => {
                    return (<Col sm={3}>{employer}</Col>);
                })}
            </Row>
            {employerComponents.map((employer, index) => {
                if (index % 2 !== 0) {
                    // We've already processed this employer
                    return null;
                }
                let nextEmployer;
                if (index !== employerComponents.length - 1) {
                    nextEmployer = employerComponents[index + 1];
                }

                return (
                    <Row className='exp-row-eq-height two-columns-per-row'>
                        <Col className='col-xxs-6'>{employer}</Col>
                        <Col className='col-xxs-6'>{nextEmployer}</Col>
                    </Row>
                );
            })}
        </div>
    );
}
