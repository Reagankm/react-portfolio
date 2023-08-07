import React, { PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap';

import './EmploymentHistory.css';
import SimpleCol from '../SimpleCol';
import SimpleRow from '../SimpleRow';

type EmployerCardProps = PropsWithChildren<{
    company: string,
    image: string, // path to image
    title: string,
    oneLine: string,
    dates: string,
}>;

const EmployerCard: React.FC<EmployerCardProps> = (props: EmployerCardProps) => {

    return (
        <Card className='work-exp-panel ultra'>
            <SimpleRow className='name-and-dates'>
                <SimpleCol>
                    <div className='exp-image'>
                        <img src={props.image} alt='' />
                    </div>
                </SimpleCol>
                <SimpleCol>
                    <div className='exp-company'>{props.company}</div>
                    <div className='subtitle cinzel dates'>{props.dates}</div>
                </SimpleCol>
            </SimpleRow>

            <SimpleRow>{props.title}</SimpleRow>
            <SimpleRow className='bai'>{props.oneLine}</SimpleRow>

        </Card>
    );
}

export default EmployerCard;
