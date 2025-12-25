import React from 'react'

const ScatteredAxisBottom = ({xScale,innerHeight, tickOffset=3}) => (
    xScale.ticks().map(tickValue=>(
        
        <g className="axis" key={tickValue} transform ={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight}/>
            <text style={{textAnchor:"middle"}}
                    dy=".71em"
                    y={innerHeight + tickOffset}
            >
                {tickValue}
            </text>
        </g>
    ))
)

export default ScatteredAxisBottom
