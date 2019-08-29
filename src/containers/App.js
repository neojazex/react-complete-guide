import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Meg', age: 26 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIdx]};

    //const person = Object.assign({}, this.state.persons[personIdx]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIdx) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }    
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/> 
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }    
    }

    // let classes = ['red', 'bold'].join(' '); //"red bold"
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); //red
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); // red bold
    }

    return (<StyleRoot>
        <div className="App">
          <h1>Hello world!</h1>
          <p className={classes.join(' ')}>Dynamic class example</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
      );
    }
  }
  
  export default Radium(App);
