import React, {Component} from 'react';

import classes from './Person.module.css';

import Aux from "../../../hoc/Auxillary"

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (//className={classes.Person}
            <Aux> 
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}
export default Person;