import React, { Component } from 'react';
import ReactDOM from'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jose Gomez",
      age: '33',
      city: 'Miami',
      job: 'Call Agent',
      hobbys: 'Soccer'
    };
  }
  
  render() {
    return (
      <div>
        <h1>Employee</h1>
        <h1>My Name is {this.state.name}</h1>
        <p>My age is: {this.state.age}</p>
        <p>I live in {this.state.city }</p>
        <p>I work as a {this.state.job}</p>
        <p>Some of my favorite hobbies are {this.state.hobbys}</p>

        

      </div>
    );
  }
}




export default App;
