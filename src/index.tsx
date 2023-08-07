import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import BasePage from './BasePage';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import './index.css';
import Main from './main/Main';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'
                       element={(
                           <BasePage>
                               <Main />
                           </BasePage>
                       )} />
                <Route path='experience'
                       element={(
                           <BasePage>
                               <Experience />
                           </BasePage>
                       )} />
                <Route path='contact'
                       element={(
                           <BasePage>
                               <Contact />
                           </BasePage>
                       )} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
