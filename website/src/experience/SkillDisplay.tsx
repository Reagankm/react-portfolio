import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import SkillCategory from './SkillCategory';
import skillData from './data/skills.json';

type JsonSkill = {
    type: string,
    values: string[]
}

const SkillDisplay: React.FC = () => {
    return (
        <div>
            <Row className='heading ultra' id='skills'>
                Skills
            </Row>
            <Row>
                <Card className='glass-panel ultra'>
                    <Row>
                        {skillData.map((skillCategory: JsonSkill) => {
                            const heading: string = skillCategory.type;
                            const tech: string[] = skillCategory.values;
                            return (
                                <Col xs={4}>
                                    <SkillCategory heading={heading}
                                                   technology={tech}/>
                                </Col>
                            );
                        })}
                    </Row>

                </Card>
            </Row>
        </div>
    );
};

export default SkillDisplay;
