import React from 'react';
import Raduim from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 600px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name} and i am {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Raduim(person);