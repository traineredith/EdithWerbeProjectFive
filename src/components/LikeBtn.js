import React, { Component } from 'react';

class LikeButton extends Component {
    render() {
        return (
            <div className="likes" onClick={() => { this.props.handleLikeClick(this.props.uniqueKeything) }}>
                {this.props.likesthing}
                <img src="../assets/safiEmoji_128x128.png" />
            </div>
        )
    }
}


export default LikeButton