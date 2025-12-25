import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <h1>WelCome to new Data Visualization Site of 2021</h1>
            <h4>We Provide You the Best Visualization</h4>
            <p style={{fontSize:"1.5rem"}}>Enjoy!!</p>
            <div style={{display:"flex",flexDirection:"column"}}>
                <Link className="link" to="/worlddata">
                    <button className="btn">
                        Enjoy the beautiful World Map
                    </button>
                </Link>
                <Link className="link" to="/scattered">
                    <button className="btn">
                        Analyse Scattered Plot of Iris Flower
                    </button>
                </Link>
                <Link className="link" to="/linedata">
                    <button className="btn">
                        View Line Graph of Temperature this Week
                    </button>
                </Link>
                <Link className="link" to="/barchart">
                    <button className="btn">
                        Get Amazed by Bar Chart of Meat Consumed in Nepal
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
