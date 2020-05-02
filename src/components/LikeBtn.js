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

incrementLikes = () => {
        let newLike = this.state.likes + 1
        this.setState({
            likes: newLike
        }) 
        const keyToUpdate = this.props.uniqueKey
        const dbRef = firebase.database().ref(keyToUpdate);

        dbRef.update({
            
        likes: this.state.likes
        })
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