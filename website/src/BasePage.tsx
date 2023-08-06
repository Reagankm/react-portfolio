import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import MenuHeadline from './MenuHeadline';

import Menu from './Menu';
import './BasePage.css';
import UnderlineMenu from './UnderlineMenu';

type Props = PropsWithChildren<{}>;

/**
* Basic page with background and menu bar.
* props.children are the other component(s) to display on the page
*/
const BasePage: React.FC<Props> = (props) => {

    //let location = useLocation();

    return (
        <div className="base-page">
            <header>
                <div className='menu-panel'>
                    {/*<UnderlineMenu currentPath={location.pathname} />*/}
                    <UnderlineMenu />
                    <MenuHeadline />
                    {/*<MenuHeadline currentPath={location.pathname} />*/}
                </div>
                {/*<Menu currentPath={location.pathname} />*/}
            </header>
            {props.children}
        </div>
    );

}

export default BasePage;
