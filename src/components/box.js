import React,{useContext}from 'react';
import TryContext from '../hoc/try-context';

const Box =(props)=>{

const Store=useContext(TryContext);

    return <div>
        
        {Store.hs?<div style={{border:"1px solid black",width:'15vw',height:'15vw'}}>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        </div>:null}
    </div>
    };

export default Box;