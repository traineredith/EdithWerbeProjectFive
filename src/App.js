import React, { Component } from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm'
import firebase from './firebase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";


import Container from '@material-ui/core/Container';
import UseStyles from './components/StylesTheme';

import Input from './components/NameInput';
import Button from './SubmitBtn';
import LikeButton from './components/LikeBtn';
import FormInputs from './components/FormInputs';
import TextField from 'material-ui/TextField';



import './App.css';

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     allMesssages: [],
  //     messageTo:'',
  //     messageFrom:'',
  //     message: '',
  //     likes: 0
  //   }
  // }

  // handleChange = input => e => {
  //   this.setState({ [input]: e.target.value })
  // }

  // // handleChange = (event) => {
  // //   this.setState({ message: event.target.value })
  // // }

  // handleToChange = (event) => {
  //   this.setState({messageTo: event.target.value})
  // }

  // handleFromChange = (event) => {
  //   this.setState({messageFrom: event.target.value})
  // }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const dbRef = firebase.database().ref();

  //   //error handling
  //   //if the name input and the message input do not have a value, OR if there is no name but there is a message, OR there is a name but no message, then return an error 
  //   if ((!this.state.messageTo || !this.state.messageFrom || !this.state.message)) {
  //     return this.setState({ error: 'You must fill out all fields!' })

  //   } else {
  //     //get the mailbox div and scroll it into view
  //     document.getElementById('postsBoard').scrollIntoView({
  //       //declaring the behavior of the scroll
  //       block: 'start',
  //       behaviour: 'smooth'
  //     })
  //   }
   
  //   // here we grab whatever value this.state.userInput has and push it to the database
  //   dbRef.push({
  //     message: this.state.message, 
  //     messageTo: this.state.messageTo, 
  //     messageFrom: this.state.messageFrom,
  //     likes: 0
  //   });

  //   // here we reset the state to an empty string
  //   this.setState({ 
  //     message: "",
  //     messageTo: "", 
  //     messageFrom: ""
  //   })
  // }

  // componentDidMount() {
  //   const dbRef = firebase.database().ref();
  //   dbRef.on('value', (response) => {
  //     // Here we're creating a variable to store the new state we want to introduce to our app
  //     const newState = [];
  //     // Here we store the response from our query to Firebase inside of a variable called data
  //     // .val() is a Firebase method that gets us the information we want
  //     const data = response.val();

  //     //data is an object, so we iterate through it using a for in loop the message 
  //     for (let key in data) {
  //       // inside the loop, we push each message to an array we already created inside the .on() function called newState
  //       const newOjbect={
  //         firebaseKey: key,
  //         message: data[key].message,
  //         messageTo: data[key].messageTo,
  //         messageFrom: data[key].messageFrom,
  //         likes: data[key].likes
    
  //       }
  //       newState.unshift(newOjbect);

  //     }
  //     // then, we call this.setState in order to update our component's state using the local array newState
  //     this.setState({
  //       allMesssages: newState
  //     });

  //   });
  // }

  // render() {
  //   const { values, handleChange } = this.props;

  //   return (
  //     <div className="App">

  //       <UserForm />

  //       <Header />
  //       {/* <FormInputs /> */}
  //       <main>
  //       <form 
  //       action='' 
  //       className='form-container' 
  //       onSubmit={this.handleFormSubmit}> 

            
  //         <Input
  //           className="toInput"
  //           placeholder="To:"
  //           type="text"
  //           onChange={this.handleChange}
  //           value={this.state.messageTo} />
            
  //         <Input
  //           placeholder="From:"
  //           type="text"
  //           onChange={this.handleFromChange} 
  //           value={this.state.messageFrom} />

  //         <textarea
  //             placeholder='Leave a message, joke or jibe for your beloved student or instructor'
  //           type="text"
  //           id="newMessage"
  //           value={this.state.message}
  //           onChange={this.handleChange} />

  //         <Button 
  //         onClick={this.handleClick}
  //           handleLikeClick={this.handleLikeClick}
  //           />
  //       </form>
  //       {this.state.error && <p className="errorMessage">{this.state.error}</p>}
  //         <div className="motivation">
  //           <h2>Motivational quotes or slider of images</h2>
  //         </div>
  //       </main>

        /* <div className="postsBoard" id="postsBoard">
          {this.state.allMesssages.map((newMessage) => {
            return( 
            <div className="posts">
              <p className="toPrefix">To: {newMessage.messageTo}</p>
              <p className="postedMessage">{newMessage.message}</p> 
              <p className="fromPrefix">From: {newMessage.messageFrom}</p>
              <LikeButton
              uniqueKey={newMessage.firebaseKey} 
              likes={newMessage.likes}
              
              />
            </div> */

       

        <div className="postsBoard" id="postsBoard">

          {this.state.allMesssages.map((newMessage) => {
// const { classes }
            return ( 
              <Grid container >

                <Grid item xs>
                  <Paper className="posts">
                    <p className="toPrefix">To: {newMessage.messageTo}</p>
                    <p className="postedMessage">{newMessage.message}</p>
                    <p className="fromPrefix">From: {newMessage.messageFrom}</p>
                    <LikeButton
                      uniqueKey={newMessage.firebaseKey}
                      likes={newMessage.likes} />
                  
                    </Paper>
                </Grid>
                
              </Grid>
            
            )  
            
          })}
        
        </div>
      </div>
    )
  }
}

export default App;