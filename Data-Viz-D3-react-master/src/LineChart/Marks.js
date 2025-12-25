import React from 'react'
import { curveNatural, line } from 'd3'
import "../Axis.css"
const Marks = ({xScale,yScale,xValue,yValue,data,radius}) => (
    <g className="marks">
        <path fill ="none" d={line()
                .x(d=>xScale(xValue(d)))
                .y(d=>yScale(yValue(d)))
                .curve(curveNatural)
                (data)
                }
                    
                />
        {data.map(d=>(
            <circle 
                cx={xScale(xValue(d))}
                cy={yScale(yValue(d))}
                r= {radius}
            >
                <title>{parseFloat(yValue(d)).toFixed(2)}</title>
            </circle>
        ))}
    </g>
)

export default Marks
