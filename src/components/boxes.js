import React from 'react';
import Box from './box';
import TryContext from '../hoc/try-context';


const Boxes =(props)=>{

    return <div style={{display:'flex',marginLeft:'40vw'}}>
        <Box  name="Sam" age="23"/>
        <Box name="Laura" age="24"/>
        <TryContext.Consumer>
        {(context)=><button onClick={context.click}>Hide/Show</button>}
        </TryContext.Consumer>

    </div>
};

export default Boxes;