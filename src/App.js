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
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button onClick={() => this.swtichNameHandler('MAXXXXX!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.swtichNameHandler.bind(this, 'Maxie!!!!')}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.swtichNameHandler.bind(this, 'Maxie!!!!')}
          changed={this.nameChangeHandler}>Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.swtichNameHandler.bind(this, 'Maxie!!!!')}/>
      </div>
    );
  }
}

export default App;
