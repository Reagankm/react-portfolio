import React, { PropsWithChildren } from 'react';
//import { Row, Col, Card } from 'react-bootstrap';

//import skillData from './data/skills.json';
import './Experience.css';
import '../fonts.css';

// type JsonSkill = {
//     type: string,
//     values: string[]
// }

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
//
// export const renderSkills = () => {
//     return (
//         <div>
//             <Row className='heading ultra' id='skills'>
//                 Skills
//             </Row>
//             <Row>
//                 <Card className='glass-panel ultra'>
//                     <Row>
//                         {skillData.map((skillCategory: JsonSkill) => {
//                             const heading: string = skillCategory.type;
//                             const tech: string[] = skillCategory.values;
//                             return (
//                                 <Col xs={4}>
//                                     <SkillCategory heading={heading}
//                                             technology={tech}/>
//                                 </Col>
//                             );
//                         })}
//                     </Row>
//
//                 </Card>
//             </Row>
//         </div>
//     );
// }
