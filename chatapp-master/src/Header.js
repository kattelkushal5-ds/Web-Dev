import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Avatar,IconButton} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"

import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { useStateValue } from './StateProvider';


function Header() {
    const [{user}, dispatch] = useStateValue()
    console.log(user)
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
                <div className="header-input">
                    <SearchIcon />
                    <input type="text" placeholder="Search facebook"/>
                </div>
            </div>
            <div className="header-middle">
                <div className="header-options header-options-active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-options">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-options">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header-options">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header-options">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
