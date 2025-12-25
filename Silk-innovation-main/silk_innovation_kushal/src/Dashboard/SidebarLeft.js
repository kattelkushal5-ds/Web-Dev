import React from 'react'
import styled from "styled-components"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const SidebarLeft = ({sidebaropen}) => {
    return (
        <SidebarWrapper show={sidebaropen}>
                <HomeOutlinedIcon className="icon" onClick={sidebaropen} />
                <ReceiptOutlinedIcon className="icon"/>
                <AccountBalanceWalletOutlinedIcon className="icon"/>
                <SettingsApplicationsOutlinedIcon className="icon"/>
                <AccountCircleOutlinedIcon className="icon"/>
        </SidebarWrapper>
    )
}

export default SidebarLeft

const SidebarWrapper = styled.div `
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 1.5rem;
    justify-content: space-around;
    padding: 30px;
    transition: 0.5s ease;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};

    box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    .icon{
        cursor: pointer;
        font-size: 2rem;
    }

`