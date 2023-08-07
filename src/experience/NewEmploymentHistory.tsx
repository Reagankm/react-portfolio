import React, { PropsWithChildren } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SimpleCol from '../SimpleCol';
import SimpleRow from '../SimpleRow';
import employmentHistory from './data/employment_history.json';
import './Employment.css';
import './NewEmploymentHistory.css';

type Props = PropsWithChildren<{
}>;

const LogoRow: React.FC = () => {
    return (<div className='exp-image'>
        {employmentHistory.map((employer) => {
        return <img src={employer.image} alt={`${employer.company} logo`} />
    })}
    </div>);
}
type NEProps = PropsWithChildren<{
    company: string,
    image: string, // path to image
    title: string,
    oneLine: string,
    dates: string,
}>;

const NewEmployer: React.FC<NEProps> = (props: NEProps) => {

    return (
        <Card className='new work-exp-panel ultra'>
            <SimpleRow>
                <SimpleCol>
                    <div className='exp-image'>
                        <img src={props.image} alt='' />
                    </div>
                </SimpleCol>
                <SimpleCol>
                    <div className='exp-company'>{props.company}</div>
                    <div className='subtitle cinzel'>{props.dates}</div>
                </SimpleCol>
            </SimpleRow>

            <SimpleRow>{props.title}</SimpleRow>
            <SimpleRow className='bai'>{props.oneLine}</SimpleRow>

        </Card>
    );
}

const NewEmploymentHistory: React.FC<Props> = (props) => {
    // const employerComponents = employmentHistory.map((employer) => {});
    const logoArray = employmentHistory.map((employer) => {
        return <img src={employer.image} alt={`${employer.company} logo`} />
    });
    const logoMidpoint = Math.floor(logoArray.length / 2);
    // return (
    //     <div className='new employment-history'>
    //         <Row className='heading ultra' id='employment'>
    //             <Col>
    //             {logoArray.filter((logo, i) => {return i < logoMidpoint})}<span>Employment History</span>{logoArray.filter((logo, i) => {return i >= logoMidpoint})}
    //             </Col>
    //         </Row>
    //         <LogoRow />
    //     </div>
    // );

    const newEmployerComponents = employmentHistory.map((employer) => {
        return <NewEmployer company={employer.company}
                         image={employer.image}
                         title={employer.title}
                         oneLine={employer.oneLine}
                         dates={employer.dates} />
    });

    return (
        <div className='new employment-history'>
            <div className='heading ultra' id='employment'>
                <div className='logo-row'>
                    {logoArray.filter((logo, i) => {return i <= logoMidpoint})}
                </div>
                <div id='employment-span'>
                    <span>Employment History</span>
                </div>
                <div className='logo-row'>
                    {logoArray.filter((logo, i) => {return i > logoMidpoint})}
                </div>
            </div>
            {/*<div id='logo-row'>*/}
            {/*    <LogoRow />*/}
            {/*</div>*/}
            <div className='scrolling-wrapper'>
            <SimpleRow className='exp-row-eq-height four-columns-per-row'>
                {newEmployerComponents.map((employer) => {
                    return (<Col className='scrollable-card' sm={3}>{employer}</Col>);
                })}
            </SimpleRow>
            </div>
            {/*<Row className='exp-row-eq-height four-columns-per-row'>*/}
            {/*    {newEmployerComponents.map((employer) => {*/}
            {/*        return (<Col sm={3}>{employer}</Col>);*/}
            {/*    })}*/}
            {/*</Row>*/}
            {/*{newEmployerComponents.map((employer, index) => {*/}
            {/*    if (index % 2 !== 0) {*/}
            {/*        // We've already processed this employer*/}
            {/*        return null;*/}
            {/*    }*/}
            {/*    let nextEmployer;*/}
            {/*    if (index !== newEmployerComponents.length - 1) {*/}
            {/*        nextEmployer = newEmployerComponents[index + 1];*/}
            {/*    }*/}

            {/*    return (*/}
            {/*        <Row className='exp-row-eq-height two-columns-per-row'>*/}
            {/*            <Col className='col-xxs-6'>{employer}</Col>*/}
            {/*            <Col className='col-xxs-6'>{nextEmployer}</Col>*/}
            {/*        </Row>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
};

export default NewEmploymentHistory;
