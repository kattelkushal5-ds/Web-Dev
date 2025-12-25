import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import { Avatar, Switch, TextField, FormControl, Select,MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Header = ({handleSidebar, classes, user}) => {
    const { name, balance, avatar} =user
    return (
        <HeaderWrapper>
            <div className="headerLeft">
                <MenuIcon  className="burger"  onClick={handleSidebar} style={{marginLeft: "2rem"}}/>
                
                <TextField className={classes.root}
                    InputProps={{className: classes.input}}
                    id="standard-basic" placeholder="Search" style={{marginRight: "1rem"}}/>
                
                <FormControl className="dropDown">
                    <Select 
                        displayEmpty
                        defaultValue = {10}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem>
                        None
                    </MenuItem>
                    <MenuItem value={10} selected>En</MenuItem>
                    <MenuItem value={20}>Np</MenuItem>
                    <MenuItem value={30}>In</MenuItem>
                    </Select>
                </FormControl>
                <FullscreenExitIcon />
            </div>

            <div className="headerMiddle">
                Sajilo <span className="logoStyle">Pay</span>
            </div>
            <div className= "headerRight">
                <Switch />
                <div className="wallet">
                    <i>Wallet Balance</i>
                    <b>Rs {balance}</b>
                </div>
                <div className="avatar">
                    <p>{name}</p>
                    <Avatar src={avatar} style={{marginLeft: "1rem", marginRight: "1rem"}}/>
                </div>
            </div>
        </HeaderWrapper>
    )
}
const styles = {
    root: {
      background: "#669999"
    },
    input: {
      color: "white"
    }
  }
Header.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(Header)



const HeaderWrapper = styled.nav `
    width: 100vw;
    position: sticky;
    position: --webkit-sticky;
    height: 4rem;
    background: #009999;
    color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid grey;
    .headerLeft{
        margin-top: 0px;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem
    }
    .headerMiddle{
        display: flex;
        justify-content: center;
        align-items: center
    }
    .headerRight{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem
    }

    .dropDown{
        margin-right:10px;
    }

    .burger{
        cursor: pointer;
        margin-right: 1rem;
    }

    .logoStyle {
        color:black;
        font-weight: 800;
        border-radius: 999px;
        background: aqua;
        width: 3rem;
        height: 3rem;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .wallet{
        margin: 0px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
