import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Menu from './Menu';
import './Base.css';

/**
* Basic page with background and menu bar.
* props.children are the other component(s) to display on the page
*/
class BasePage extends Component {

  render() {
    return (
      <div className="base-page">
        <header>
          <Menu currentPath={this.props.location.pathname} />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(BasePage);
