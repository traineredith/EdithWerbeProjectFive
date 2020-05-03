import React, { Component } from 'react';
import firebase from "../firebase"
import Safi from "../assets/safiEmoji.png"

class LikeButton extends Component {
constructor(){
    super()
    this.state = {
        likes: 0
    }
}

incrementLikes = (props) => {
    let newLike = this.props.likes + 1;
    console.log("likes " + this.props.likes);
    // this.setState({
    //     likes: newLike
    // });
    const uniqueKey = this.props.uniqueKey;
    const dbRef = firebase.database().ref(uniqueKey);
    dbRef.update({  
        likes: newLike
    });
}

    render() {
        return (
            <button 
            type="image"
            className="likes" 
            onClick={this.incrementLikes}
            >
            <img src={Safi} alt="an emoji pic of Safi - the most ridiculous, yet beloved and very handsome instructor at Juno"/>
            {this.props.likes}
            </button>
           
        )
    }
}


export default LikeButton