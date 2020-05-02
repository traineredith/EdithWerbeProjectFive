import React, { Component } from 'react';
import FormInputs from './FormInputs';
import firebase from '../firebase';


export class UserForm extends Component{
    constructor() {
        super();
        // this.wrapper = React.createRef();
        this.state = {
            allMesssages: [],
            messageTo: '',
            messageFrom: '',
            message: ''  
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    // handleChange = (event) => {
    //     this.setState({ message: event.target.value })
    // }

    // handleToChange = (event) => {
    //     this.setState({ messageTo: event.target.value })
    // }

    // handleFromChange = (event) => {
    //     this.setState({ messageFrom: event.target.value })
    // }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();

        //error handling
        //if the name input and the message input do not have a value, OR if there is no name but there is a message, OR there is a name but no message, then return an error 
        if ((!this.state.messageTo || !this.state.messageFrom || !this.state.message)) {
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
                // inside the loop, we push each message to an array we already created inside the .on() function called newState
                const newOjbect = {
                    firebaseKey: key,
                    message: data[key].message,
                    messageTo: data[key].messageTo,
                    messageFrom: data[key].messageFrom,
                    likes: data[key].likes

                }
                newState.unshift(newOjbect);

            }
            // then, we call this.setState in order to update our component's state using the local array newState
            this.setState({
                allMesssages: newState
            });

        });
    }

    render(){
        const { message, messageFrom, messageTo } = this.state;
        const values = { message, messageFrom, messageTo }
        return (
            <FormInputs 
            handleChange = {this.handleChange}
            values={values}
            />
        )
    }
}

export default UserForm;