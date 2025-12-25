import React from "react"
import styled from "styled-components"
import Cards from "./Cards"
import Accordian from "./Accordion"
import RadioIcon from '@material-ui/icons/Radio';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FlightIcon from '@material-ui/icons/Flight';

const Main = () => {
    return (
        <MainWrapper>

                <div className="cardsContainer">
                <div className="cards" style={{marginRight:"10px"}}>
                    <Cards Icon ={RadioIcon} desc="Local Funds"/>
                </div>
                <div className="cards" style={{marginRight:"10px"}}>
                    <Cards Icon ={AccountBalanceIcon} desc="Bank Transfer"/>
                </div>
                <div className="cards">
                    <Cards Icon={FlightIcon} desc="Send Funds"/>
                </div>
                </div>

                    <div className ="accordion" style={{marginBottom: "10px"}}>   
                        <Accordian image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                   className="singleAccordion" 
                        />
                    </div>
                    <Accordian className="singleAccordion" />

        </MainWrapper>
    )
}

export default Main

const MainWrapper = styled.div `
    margin-top: 1rem;
    height: 86vh;
    max-width: 40rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .cardsContainer{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }

    .accordion{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .cards{
        box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
    }
    .cards :hover{
        cursor: pointer;
        transform: scale(1.04);
    }

`;
