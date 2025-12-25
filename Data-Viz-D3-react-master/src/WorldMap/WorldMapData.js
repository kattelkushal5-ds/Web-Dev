import React from 'react'
import Marks from './Marks'
import useData from './useData'
import { Link } from 'react-router-dom'

const width =960
const height =530
const WorldMapData = () => {
    const data =useData()
    if(!data){
        return <pre>Loading</pre>
    }
    return (
        <>
            <svg height = {height} width = {width}>
                <Marks data={data}/>
            </svg>
            <div className="linkWrapper">
                <Link className="link" to="/scattered">
                    <button className="btn">
                        Scattered Plot of Iris Flower
                    </button>
                </Link>
                <Link className="link" to="/linedata">
                    <button className="btn">
                        Line Graph of Temperature this Week
                    </button>
                </Link>
                <Link className="link" to="/barchart">
                    <button className="btn">
                        Bar Chart of Meat Consumed in Nepal                            
                    </button>
                </Link>
            </div>
        </>
    )
}

export default WorldMapData
