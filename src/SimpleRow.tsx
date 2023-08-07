import React, { PropsWithChildren } from 'react';

import './SimpleComponents.css';

type Props = PropsWithChildren<{
    className?: string;
}>;

const SimpleRow: React.FC<Props> = (props) => {
    return (
        <div className={`simple-row ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

export default SimpleRow;
