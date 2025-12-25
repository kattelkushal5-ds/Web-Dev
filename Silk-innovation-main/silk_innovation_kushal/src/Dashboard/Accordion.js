import React from 'react'
import { Card } from '@material-ui/core'
import styled from "styled-components"
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
//Material UI Card

  
const Accordian = ({image}) => {

    return (
        <CardWrapper>
            <Card className="card">
                
                    {image && <img src ={image} alt="Laptop and Notebook"/> }
                       <div className="iconContent">
                            <Fab color="secondary" aria-label="add">
                                <AddIcon />                    
                            </Fab>
                       </div>


            </Card>
        </CardWrapper>
    )
}

export default Accordian


const CardWrapper = styled.div`
    height: 9rem;
    box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px -1px 10px -2px rgba(0,0,0,0.75);
    .card{
        height: 100%;
    }
    .img{
        height: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .iconContent{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }

`;