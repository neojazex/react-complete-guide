import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';

import withClass from '../../../hoc/withClass';

import Aux from "../../../hoc/Auxillary"

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (//className={classes.Person}
            <React.Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEL) => { this.inputElement = inputEL }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);