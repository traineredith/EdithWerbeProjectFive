import React, { Component } from 'react';
import Header from './Header';
import FormContainer from './Form';
import firebase from './firebase';
import Input from './components/MsgToInput';
import Button from './SubmitBtn';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allMesssages: [],
      messageTo:'',
      messageFrom:'',
      newMessage: ''
    }
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.message);
    const dbRef = firebase.database().ref();
   
    // here we grab whatever value this.state.userInput has and push it to the database
    dbRef.push(this.state.message);
    // here we reset the state to an empty string
    this.setState({ message: '' })
  }


  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      // Here we're creating a variable to store the new state we want to introduce to our app
      const newState = [];
      // Here we store the response from our query to Firebase inside of a variable called data
      // .val() is a Firebase method that gets us the information we want
      const data = response.val();
      console.log("this is from database" +  response.val());

      //data is an object, so we iterate through it using a for in loop the message 
      for (let key in data) {

        // inside the loop, we push each note to an array we already created inside the .on() function called newState
        newState.push(data[key]);
        console.log(data[key]);
      }
      // then, we call this.setState in order to update our component's state using the local array newState
      this.setState({
        allMesssages: newState
      });

    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form action='' className='form-container' onSubmit={this.handleFormSubmit}>

          <Input
            placeholder="To:"
            type="text"
            onChange={this.handleChange} />
            
          <Input
            placeholder='From:'
            type="text"
            onChange={this.handleChange} />
          <textarea
            placeholder='Leave a lovely message'
            type="text"
            id="newMessage"
            onChange={this.handleChange} />
          <Button onClick={this.handleClick} />

        </form>
        <ul>
          {this.state.allMesssages.map((newMessage) => {
            return <li>{newMessage}</li>     
          })}
        </ul>

      </div>
    )
  }
}

export default App;