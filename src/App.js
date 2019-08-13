import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Meg', age: 26 }
    ],
    showPersons: false
  }

  swtichNameHandler = (newName) => {
    //console.log('FIRE!');
    // this.state.persons[0].name = 'max dude';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Meg', age: 36 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Meg', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
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
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
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
