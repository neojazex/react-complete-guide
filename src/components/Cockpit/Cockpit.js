import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';

import AuthContext from "../../context/auth-context";

function useCockpit(props) {

  //errors - see Sections 26-28 for react Hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
  //   setTimeout(() => {
  //     alert('Saved data to cloud!');
  //   }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []); //[props.persons] to call on change

  // let assignedClasses = ['red', 'bold'].join(' '); //"red bold"

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  let assignedClasses = [];

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //red
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // red bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Dynamic class example</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>
        Switch Name
      </button>
        <button onClick={authContext.login}>
          Log in
        </button>}
    </div>
  );
};

export default React.memo(useCockpit);