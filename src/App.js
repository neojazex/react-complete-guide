import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
      );
    }
  }
  
  export default App;
