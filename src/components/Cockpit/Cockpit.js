import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

  // let assignedClasses = ['red', 'bold'].join(' '); //"red bold"
  let assignedClasses = [];

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //red
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // red bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello world!</h1>
      <p className={assignedClasses.join(' ')}>Dynamic class example</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Switch Name
            </button>
    </div>
  );
};

export default cockpit;