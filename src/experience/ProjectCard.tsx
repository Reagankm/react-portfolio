import React, { PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap';

import '../fonts.css';
import SimpleBadge from '../SimpleBadge';
import './ProjectDisplay.css';

type Props = PropsWithChildren<{
    name: string,
    technology: string[],
    description: string,
    oneLine: string,
    company: string,
}>;

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <Card className='project'>
            <div className='section project-heading'>
                <div className='project-name ultra'>
                    {props.name}
                </div>
                <div className='project-company cinzel'>
                    {props.company}
                </div>
            </div>
            <div className='section'>
                <div className='project-one-line bai'>
                    {props.oneLine}
                </div>
                <div className='project-tech nova-mono'>
                    {props.technology.map((tech) => {
                        return (
                            <SimpleBadge className='tech-badge' key={tech}>
                                {tech}
                            </SimpleBadge>
                        );
                    })}
                </div>
            </div>
            <div className='project-description bai'>
                {props.description}
            </div>
        </Card>
    );
};

export default ProjectCard;
