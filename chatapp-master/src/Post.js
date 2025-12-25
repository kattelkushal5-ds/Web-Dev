import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Post = ({profilePic,image,username,timestamp,message}) => {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar"/>
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-img">
                <img src={image} alt="Post"/>
            </div>   

            <div className="post-options">
                <div className="post-option">
                    <ThumbUpAltIcon/>
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutlinedIcon/>
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircleOutlinedIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>
            </div>
            
        </div>
    )
}

export default Post
