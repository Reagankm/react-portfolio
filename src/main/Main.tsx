import React from 'react';

import './Main.css';
import '../fonts.css';

const Main: React.FC = () => {
    return (
        <div className='mainHeadings'>
            <h1 className='mainName ultra'>Reagan Middlebrook</h1>
            <h2 className='mainTitle cinzel'>Software Engineer</h2>
        </div>
    );
}

// class Main extends Component {
//
//   render() {
//     return (
//       <div className='mainHeadings'>
//         <h1 className='mainName ultra'>Reagan Middlebrook</h1>
//         <h2 className='mainTitle cinzel'>Software Engineer</h2>
//       </div>
//     );
//   }
// }

export default Main;
