import React, { Component } from 'react';

class LikeButton extends Component {

state = {
    likes: 0
}

incrementLikes = () => {
    
        let newLike = this.state.count + 1
        this.setState({
            likes: newLike
        })  
}

    render() {
        return (
            <button 
            // type="image"
            // src="../src/assets/safiEmoji.png"
            className="likes" 
            onClick={this.incrementLikes}
            >
            < i className="fas fa-heart" ></i >
            {/* <img src="../src/assets/safiEmoji.png" alt="why?"/> */}
                {this.state.count}
            </button>
        )
    }
}


export default LikeButton