import React from 'react'
import "./Marks.css"

import { geoNaturalEarth1,geoPath, geoGraticule} from 'd3-geo'
const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks = ({data: {land,interiors}}) => {
    return (
        <g className="marks">
            <path className="sphere" d={path({type:"Sphere"})} />
            <path className="graticule" d={path(graticule())}></path>
            {land.features.map(feature=>(
                <path className="land" d={path(feature)}/>
            ))}
            <path className="interiors" d={path(interiors)}></path>
        </g>
    )
}

export default Marks
