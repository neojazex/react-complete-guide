import React, { PureComponent } from 'react';

import Person from './Person/Person'
import AuthContext from "../../context/Auth-context";

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    // componentWillUpdate() {
        
    // }

    // shouldComponentUpdate(nextProps, nextState) {


    //     console.log('[Persons.js] shouldComponentUpdate');

    //     // return super.shouldComponentUpdate(nextProps, nextState);
        
    //     return (nextProps.persons !== this.props.persons) ||
    //     (nextProps.clicked !== this.props.clicked) ||
    //     (nextProps.changed !== this.props.changed);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (<Person key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} 
            />);
        });
    }
}

export default Persons;