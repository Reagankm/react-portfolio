import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import { renderEmploymentHistory } from './Employment';
import { renderProjects } from './Project';
import { renderSkills } from './Skills';

import './Experience.css';
import '../fonts.css';



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
                {renderSkills()}
                {renderProjects()}
            </Grid>
        );
    }

}


export default Experience;
