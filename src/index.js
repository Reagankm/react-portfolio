import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Base from './BasePage';
import Contact from './Contact';
import Experience from './Experience';
import Main from './Main';
import ScrollToTop from './ScrollToTop';
import './index.css';

const root = document.getElementById('root');

const router = (
  <Router>
    <ScrollToTop>
    <div>
      <Route exact path='/' component={() => (<Base children={<Main />} />)} />
      <Route path='/experience' component={() => (<Base children={<Experience/>} />)} />
      <Route path='/contact' component={() => (<Base children={<Contact />} />)} />
  </div>
  </ScrollToTop>
  </Router>);

ReactDOM.render(router, root);

registerServiceWorker();
