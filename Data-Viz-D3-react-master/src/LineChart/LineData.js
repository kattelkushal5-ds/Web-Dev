import React from 'react'
import {useLineData} from './useLineData'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'
import { Link } from 'react-router-dom'
import { scaleLinear, scaleTime, extent,timeFormat } from 'd3'

const width = 960
const height = 450
const margin ={
    top:30,
    bottom:80,
    left:80,
    right:30
}
const LineData = () => {
    const data = useLineData()
    if(!data){
        return <pre>Loading...</pre>
    }
    console.log(data)
    const innerHeight = height -margin.top - margin.bottom
    const innerWidth =width-margin.left-margin.right

    const xAxisLabelOffet = 50
    const yAxisLabelOffset =35

    const xValue = d=> d.timestamp
    const xAxisLabel = 'Time'
    const yValue = d=>d.temperature
    const yAxisLabel ='Temperature'

    const xScale =scaleTime()
    .domain(extent(data,xValue)) //min to max
    .range([0,innerWidth])
    .nice()
const yScale =scaleLinear()
    .domain(extent(data,yValue)) //min to max
    .range([innerHeight,0])
    .nice()
console.log( xScale.ticks())
    return (
        <>
         <Link to="/"> 
                <button style={{background: "lightgrey",borderRadius:"6px", height:"2rem" }}>Go back Home</button>
        </Link>
        <h1>This Week's Temperature Vs Time</h1>
        <svg height={height} width={width}>
            <g transform={`translate(${margin.left}, ${margin.top})`} >
                <AxisBottom 
                    xScale={xScale} 
                    innerHeight={innerHeight}
                    tickOffset ={10}
                    tickFormat={timeFormat("%a")}
                />
                 <text 
                    className="axisLabel" 
                    x={innerWidth/2} 
                    y={innerHeight+xAxisLabelOffet} 
                    textAnchor="middle"
                >{xAxisLabel}</text>
                <AxisLeft 
                    innerWidth={innerWidth}
                    yScale={yScale}
                    yValue={yValue}
                    tickOffset ={5}
                />
                <text 
                    className="axisLabel" 
                    textAnchor="middle"
                    transform={` translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
                >{yAxisLabel}</text>
                <Marks xValue={xValue} 
                    yValue={yValue} 
                    xScale={xScale}
                    yScale={yScale}
                    data ={data}
                    radius ={3}
                />
            </g>   
        </svg>
        <div className="linkWrapper">
                <Link className="link" to="/scattered">
                    <button className="btn">
                        Scattered Plot of Iris Flower
                    </button>
                </Link>
                <Link className="link" to="/barchart">
                    <button className="btn">
                        Bar Chart of Meat Consumed in Nepal
                    </button>
                </Link>
                <Link className="link" to="/worlddata">
                    <button className="btn">
                       View the Beautiful World Map
                    </button>
                </Link>
            </div>
        </>
    )
}

export default LineData
