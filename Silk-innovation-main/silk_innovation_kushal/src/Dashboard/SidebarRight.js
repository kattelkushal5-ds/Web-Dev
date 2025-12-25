import React from 'react'
import styled from "styled-components"
import CardSidebarRight from './CardSidebarRight';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const SidebarRight = () => {
    return (
        <SidebarRightWrapper>
            <div className = "cardLayout">
                <h4>Utilities</h4>
                <div className="iconsContainer">
                    <div className="iconLayout">
                        <CardSidebarRight Icon= {PhoneAndroidIcon} title="Topup" desc="Callback upto 5%"/>
                        <CardSidebarRight Icon= {PhoneIcon} title="Landline" desc="Callback 1.5%"/>
                        <CardSidebarRight Icon= {EmojiObjectsIcon} title="Electricity"/>
                    </div>
                    <div className="iconLayout">
                        <CardSidebarRight Icon= {TvIcon} title="Telivision" desc="Callback upto 1.5%"/>
                        <CardSidebarRight Icon= {WifiIcon} title="Internet" desc="Callback 1.5%"/>
                        <CardSidebarRight Icon= {InvertColorsIcon} title="Water"/>
                    </div>
                    <div className="iconLayout">
                        <CardSidebarRight Icon= {AirplanemodeActiveIcon} title="Other Bookings" />
                    </div>
                </div>
            </div> 
                
                
        </SidebarRightWrapper>
    )
}

export default SidebarRight


const SidebarRightWrapper = styled.div `
    height: 87vh;
    margin-right: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-betweeen;
    .paper{
        display: flex;
        justify-content: space-between;
        background: rgb(240,240,240);
    }
    .card{
        margin-left: 5px;
    }
    .iconsContainer{
        display: flex;
        flex-direction: column;
    }
    .iconLayout{
        display: flex;
    }
    h4{
        text-align: center;
    }

`;