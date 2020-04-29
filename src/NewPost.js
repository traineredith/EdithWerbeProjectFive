import React from 'react'
import firebase from './firebase'

function NewPost (props) {


    const deleteItem = () => {
        console.log(props.bookId);

        const itemRef = firebase.database().ref(props.bookId)
        itemRef.remove()
    }

    return (
        <li onClick={deleteItem}>{props.bookTitle}</li>
    )
}
export default NewPost