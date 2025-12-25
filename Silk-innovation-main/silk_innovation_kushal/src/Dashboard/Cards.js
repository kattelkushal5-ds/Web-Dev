import React from 'react'
import {  Card, CardContent } from '@material-ui/core'
import styled from 'styled-components'

//Material UI Card
const Cards = ({Icon, desc}) => {
    return (
        <CardWrapper>
            <Card className="card">
                <CardContent className="cardContent">
                    <div className="icon">
                        <Icon />
                    </div>
                    <b>{desc}</b>
                </CardContent>

            </Card>
        </CardWrapper>
    )
}

export default Cards

const CardWrapper = styled.div `
    height: 10rem;
    width: 12rem;
    .card{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:  blueviolet
    }
    .cardContent{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .icon{
        color:white;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;