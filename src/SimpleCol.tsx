import React, { PropsWithChildren } from 'react';
import './SimpleComponents.css';

type Props = PropsWithChildren<{
    className?: string;
}>;

const SimpleCol: React.FC<Props> = (props) => {
    return (
        <div className={`simple-col ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

export default SimpleCol;
