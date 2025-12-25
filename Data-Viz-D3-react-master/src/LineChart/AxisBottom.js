import React from 'react'

const AxisBottom = ({xScale,innerHeight,tickOffset,tickFormat}) => (
    xScale.ticks().map(tickValue=>(
        
        <g className="axis" key={tickValue} transform ={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight}/>
            <text style={{textAnchor:"middle"}}
                    dy=".71em"
                    y={innerHeight + tickOffset}
            >
            {console.log(tickValue)}
                {tickFormat(tickValue)}
            </text>
        </g>
    ))
    
)

export default AxisBottom
