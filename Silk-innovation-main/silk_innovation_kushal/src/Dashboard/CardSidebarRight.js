import React from 'react'
import styled from "styled-components"

//Material UI card For Sidebar
const CardSidebarRight = ({Icon, title, desc}) => {
    return (
        <>
        <CardWrapper>
            <div className="card">
                <h4>{title}</h4>
                <div className="icon">
                    <Icon />
                </div>
               
            </div>
            {desc &&
                <p className="description">{desc}</p>
            }
        </CardWrapper>
       
        </>
    )
}

export default CardSidebarRight

const CardWrapper = styled.div`
    margin: 15px 15px 0px 0px;
    :hover{
        transform: scale(1.04);
    }
    .card{
        color: blueviolet;
        background: white;
        width: 10rem;
        height: 6.5rem;
        border-radius: 5px;
        box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);    
        -webkit-box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -9px 10px 21px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .description{
        width: 10.5rem;
        text-align: center;
        background: aqua;
        border-radius: 15px;
    }
    .icon{
        color:white;
        margin-bottom: 1rem;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


