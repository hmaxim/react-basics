import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 27 },
      { id: '2', name: 'Denis', age: 25 },
      { id: '3', name: 'Denis2', age: 25 },
      { id: '4', name: 'Denis3', age: 25 }
    ],
    otherState: 'Some',
    showPersons: true
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  togglePersonsMethod = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              click={() => this.deletePersonHandler(index)}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} callback={this.swithcNameHandler.bind(this, "Andy")} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>
            My Hobbie is work
              </Person> */}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <p className={classes.join(' ')}>WORK</p>
          <button
            style={style}
            onClick={(event) => this.togglePersonsMethod()}>
            Toggle Persons
        </button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! Works'));
  }
}

export default App;
