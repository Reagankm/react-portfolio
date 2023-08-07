import React, { PropsWithChildren } from 'react';

import './SimpleComponents.css';

type Props = PropsWithChildren<{
    className?: string;
}>;

const SimpleBadge: React.FC<Props> = (props) => {
    return (
        <div className={`simple-badge .nova ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

export default SimpleBadge;
