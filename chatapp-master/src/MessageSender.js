import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';


function MessageSender() {

    const[{user},dispatch] = useStateValue()
    const [input, setInput] =React.useState('')
    const [imageUrl,setImageUrl] =React.useState('')
    console.log(input,imageUrl)
    const handleSubmit =(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image: imageUrl,
        })

        setInput('')
        setImageUrl('')
    }
    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar src={user.photoURL}/>
                <form action="">
                    <input placeholder={`What's on your mind ${user.displayName}?`} value={input} onChange={e=>setInput(e.target.value)}  className="messageSender-input"/>
                    <input placeholder="image url (optional)" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className="messageSender-input"/>
                    <button type="submit" onClick={handleSubmit} ></button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender-option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender-option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
