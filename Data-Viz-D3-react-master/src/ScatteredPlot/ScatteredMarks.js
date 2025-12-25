import React from 'react'

const ScatteredMarks = ({data,xScale,yScale,yValue,xValue,colorScale,colorValue,circleRadius}) => (
    data.map(d=>(
        <circle 
        fill={colorScale(colorValue(d))}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r= {circleRadius}
        >
            <title>{xValue(d)}cm</title>
        </circle>
    ))
)

export default ScatteredMarks
