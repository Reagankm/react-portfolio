import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import './MenuHeadline.css';

const MenuHeadline: React.FC = () => {
    let location = useLocation();
    const getHeadline = (path: string): string | undefined => {
        const mapPathToHeadline = new Map<string, string>([
            ['/', 'I Build Software'],
            ['/experience', 'I\'m Good at It'],
            ['/contact', 'Reach Me Here']
        ]);

        return mapPathToHeadline.get(path);
    }

    return (
        <div className='menu-headline cinzel'>
            <Card className='well'>
                <Card.Body>
                    {getHeadline(location.pathname)}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MenuHeadline;
