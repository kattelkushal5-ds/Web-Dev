import React from 'react'

const ColorLegend = ({colorScale ,tickSpacing=30, circleRadius, tickTickOffset=20}) => {
    return colorScale.domain().map((domainValue,index)=>
   //just reusing the className axis from Axis.css
   (<g className="axis" transform ={`translate(0,${index*tickSpacing})`}>
            <text x={tickTickOffset} dy=".32em">{domainValue}</text>
            <circle fill={colorScale(domainValue)} r={circleRadius}></circle>
        </g>)
   )
}

export default ColorLegend
