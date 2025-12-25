import React from 'react'

const AxisLeft = ({yScale,yValue,innerWidth,tickOffset}) =>(
    yScale.ticks().map(tickValue=>(
        <g className='axis' transform={`translate(0, ${yScale(tickValue)})`}>
        {console.log(innerWidth)}
             <line x2={innerWidth} />
             <text key={tickValue}
                    style={{textAnchor:"end"}}
                    x={-tickOffset}
                    dy=".32em"
             >
                {tickValue}
            </text>
        </g>
))

)

export default AxisLeft
