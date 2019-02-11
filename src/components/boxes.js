import React from 'react';
import Box from './box';
import TryContext from '../hoc/try-context';


class Boxes extends React.Component {

static contextType = TryContext;

render(){

    return <div style={{display:'flex',marginLeft:'40vw'}}>
        <Box  name="Sam" age="23"/>
        <Box name="Laura" age="24"/>
        
       <button onClick={this.context.click}>Hide/Show</button>
       
    
    </div>
}


};

export default Boxes;