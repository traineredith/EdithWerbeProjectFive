import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from '../firebase';


export class FormInputs extends Component{
    

    render(){
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField 
                    hintText="message to"
                    floatingLabelText="message to"
                    // onChange={handleChange('message to')}
                    />
                    <br/>
                    <TextField
                        hintText="message from"
                        floatingLabelText="from"
                        // onChange={handleChange('message from')}
                    />
                    <br />
                    <TextField
                        hintText="what's your message"
                        floatingLabelText="leave a message"
                        // onChange={handleChange('message')}
                    />
                    <br />
                    <RaisedButton 
                    label="Press me"
                    // style={styles.button}
                    // onClick={this.handleChange}
                    />
                </React.Fragment>
             </MuiThemeProvider>
        )
    }
    // const styles = {
    //     button: {
    //         margin: 15
    //     }
    // }
}

export default FormInputs;