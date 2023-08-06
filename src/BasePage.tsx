import React, { PropsWithChildren } from 'react';

import MenuHeadline from './MenuHeadline';
import './BasePage.css';
import UnderlineMenu from './UnderlineMenu';

type Props = PropsWithChildren<{}>;

/**
* Basic page with background and menu bar.
* props.children are the other component(s) to display on the page
*/
const BasePage: React.FC<Props> = (props) => {

    return (
        <div className="base-page">
            <header>
                <div className='menu-panel'>
                    <UnderlineMenu />
                    <MenuHeadline />
                </div>
            </header>
            <div className='page-wrapper'>
                {props.children}
            </div>
        </div>
    );
}

export default BasePage;
