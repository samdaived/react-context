import React from 'react';
import TryContext from '../hoc/try-context';

const Box =(props)=>{
    return <div>
        <TryContext.Consumer>
        {(context)=>context.hs?<div style={{border:"1px solid black",width:'15vw',height:'15vw'}}>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        </div>:null}
        </TryContext.Consumer>
    </div>
    };

export default Box;