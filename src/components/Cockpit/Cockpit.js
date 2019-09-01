import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

  //errors - see Sections 26-28 for react Hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
  });

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
      <h1>{props.title}</h1>
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