import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Routes } from 'react-router';
import { createBrowserRouter, BrowserRouter, Route, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import BasePage from './BasePage';
// import registerServiceWorker from './registerServiceWorker';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Main from './main/Main';
//import ScrollToTop from './ScrollToTop';
import './index.css';

//const root = document.getElementById('root');
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
            {/*</ScrollToTop>*/}
        </BrowserRouter>
    </React.StrictMode>
);

// const router = createBrowserRouter(createRoutesFromElements(
//         <Route path='/'
//            element={<BasePage children={<Main />} />} >
//         <Route path='experience'
//                element={<BasePage children={<Experience />} />} />
//         <Route path='contact'
//                element={<BasePage children={<Contact />} />} />
//     </Route>
// ));
//
// root.render(
//     <React.StrictMode>
//         {/*<ScrollToTop />*/}
//         <RouterProvider router={router} />
//     </React.StrictMode>
// )

// const router = (
//   <Router>
//     <ScrollToTop>
//     <div>
//       <Route exact path='/' component={() => (<Base children={<Main />} />)} />
//       <Route path='/experience' component={() => (<Base children={<Experience/>} />)} />
//       <Route path='/contact' component={() => (<Base children={<Contact />} />)} />
//   </div>
//   </ScrollToTop>
//   </Router>);
//
// ReactDOM.render(router, root);
//
//registerServiceWorker();
