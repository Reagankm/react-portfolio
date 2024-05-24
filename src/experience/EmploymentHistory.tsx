import React from 'react';

import SimpleCol from '../SimpleCol';
import SimpleRow from '../SimpleRow';
import employmentHistory from './data/employment_history.json';
import EmployerCard from './EmployerCard';
import './EmploymentHistory.css';

const EmploymentHistory: React.FC = () => {

    const logoArray = employmentHistory.map((employer) => {
        return <img key={employer.company} src={employer.image} alt={`${employer.company} logo`} />
    });
    const logoMidpoint = Math.floor(logoArray.length / 2);

    interface EmployerCardType extends JSX.Element {
        company: string,
        image: string,
        title: string,
        oneLine: string,
        dates: string
    }

    const newEmployerComponents = employmentHistory.map((employer) => {
        return <EmployerCard company={employer.company}
                         image={employer.image}
                         title={employer.title}
                         oneLine={employer.oneLine}
                         dates={employer.dates} />
    });

    return (
        <div className='new employment-history'>
            <div className='heading ultra' id='employment'>
                {/*<div className='logo-row'>*/}
                {/*    {logoArray.filter((logo, i) => {return i <= logoMidpoint})}*/}
                {/*</div>*/}
                <div id='employment-span'>
                    <span>Employment History</span>
                </div>
                {/*<div className='logo-row'>*/}
                {/*    {logoArray.filter((logo, i) => {return i > logoMidpoint})}*/}
                {/*</div>*/}
            </div>
            <div className='scrolling-wrapper'>
                <SimpleRow className='card-row'>
                    {newEmployerComponents.map((employer, index) => {
                        return (<SimpleCol key={(employer as EmployerCardType).company ? (employer as EmployerCardType).company  : '' + index}
                                           className='scrollable-card'>{employer}</SimpleCol>);
                    })}
                </SimpleRow>
            </div>
        </div>
    );
};

export default EmploymentHistory;
