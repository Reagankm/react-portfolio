import React, { PropsWithChildren } from 'react';

import './Experience.css';
import '../fonts.css';


type Props = PropsWithChildren<{
    heading: string,
    technology: string[],
    font?: string
}>;

const SkillCategory: React.FC<Props> = (props: Props) => {

    return (
        <div>
            {props.heading}
            <p className='bai' style={{fontFamily: props.font}}>
                {props.technology.join(', ')}
            </p>
        </div>

    );
};

export default SkillCategory;
