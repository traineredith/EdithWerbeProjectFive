import React, { Component } from 'react';
import Header from './components/Header';
import firebase from './firebase';
import Input from './components/NameInput';
import Button from './SubmitBtn';
import LikeButton from './components/LikeBtn';
import './App.css';
import { TextField } from 'material-ui';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMesssages: [],
      messageTo: '',
      messageFrom: '',
      message: '',
    }
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  }

  handleToChange = (event) => {
    this.setState({messageTo: event.target.value})
  }

  handleFromChange = (event) => {
    this.setState({messageFrom: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();

    //error handling
    //if the name input and the message input do not have a value, OR if there is no name but there is a message, OR there is a name but no message, then return an error 
    if (!(this.state.messageTo && this.state.messageFrom && this.state.message)) {
      return this.setState({ error: 'You must fill out all fields!' })
    } else {
      //get the mailbox div and scroll it into view
      document.getElementById('postsBoard').scrollIntoView({
        //declaring the behavior of the scroll
        block: 'start',
        behaviour: 'smooth'
      })
    }
    // here we grab whatever value this.state.userInput has and push it to the database
    dbRef.push({
      message: this.state.message,
      messageTo: this.state.messageTo,
      messageFrom: this.state.messageFrom,
      likes: 0
    });

    // here we reset the state to an empty string
    this.setState({
      message: "",
      messageTo: "",
      messageFrom: ""
    })
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      // Here we're creating a variable to store the new state we want to introduce to our app
      const newState = [];
      // Here we store the response from our query to Firebase inside of a variable called data
      // .val() is a Firebase method that gets us the information we want
      const data = response.val();
      //data is an object, so we iterate through it using a for in loop the message 
      for (let key in data) {

        // inside the loop, we push each note to an array we already created inside the .on() function called newState
        // inside the loop, we push each message to an array we already created inside the .on() function called newState
        newState.unshift(data[key]);
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
            onChange={this.handleToChange}
            value={this.state.messageTo} />

          <Input
            placeholder="From:"
            type="text"
            onChange={this.handleFromChange}
            value={this.state.messageFrom} />

          <textarea
            placeholder='Leave a lovely message'
            type="text"
            id="newMessage"
            onChange={this.handleChange} 
            value={this.state.message}/>

          <Button onClick={this.handleClick} />
         
        </form>

        {this.state.error && <p className="errorMessage">{this.state.error}</p>}



        <div className="postsBoard" id="postsBoard">
          {this.state.allMesssages.map((newMessage) => {
            return (
              <div className="posts">
                <p className="toPrefix">To: {newMessage.messageTo}</p>
                <p>{newMessage.message}</p>
                <p className="fromPrefix">From: {newMessage.messageFrom}</p>
                <LikeButton
                  uniqueKey={newMessage.firebaseKey}
                  />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default App;