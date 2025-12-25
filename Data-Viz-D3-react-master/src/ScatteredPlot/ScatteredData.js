import React from 'react'
import useScatteredData from './useScatteredData'
import ScatteredAxisBottom from './ScatteredAxisBottom'
import ScatteredAxisLeft from './ScatteredAxisLeft'
import ScatteredMarks from './ScatteredMarks'
import { extent, scaleLinear, scaleOrdinal } from 'd3'
import WholeOptions from './WholeOptions'
import ColorLegend from './ColorLegend'
import "../Axis.css"
import {Link} from "react-router-dom"

const width = 960
const height = 450
const margin ={
    top:30,
    bottom:80,
    left:80,
    right:200
}
const ScatteredData = () => {
    const data = useScatteredData()

    const initialXAttribute = "petal_length"
    const [xAttribute, setXAttribute] =React.useState(initialXAttribute)
    
    const initialYAttribute = "sepal_width"
    const [yAttribute, setYAttribute] =React.useState(initialYAttribute)

    const attributes =[
        {value:"sepal_length", label:"Sepal Length"},
        {value:"sepal_width", label:"Sepal Width"},
        {value:"petal_length", label:"Petal Length"},
        {value:"petal_width", label:"Petal Width"},
        {value:"species", label:"species"},
    ]

    const getLabel =value => {
        for(let i=0; i<attributes.length; i++){
            if(attributes[i].value === value){
                return attributes[i].label
            }
        }
    }
    if(!data){
        return <pre>Loading...</pre>
    }
    console.log(data[0])
    
    const innerHeight = height -margin.top - margin.bottom
    const innerWidth =width-margin.left-margin.right

    const xAxisLabelOffet = 50
    const yAxisLabelOffset =35

    const xValue =d=>d[xAttribute]
    const xAxisLabel =getLabel(xAttribute)

    const yValue =d=>d[yAttribute]
    const yAxisLabel =getLabel(yAttribute)

    const colorValue =d=>d.species
    const xScale =scaleLinear()
            .domain(extent(data,xValue)) //min to max
            .range([0,innerWidth])
            .nice()
    const yScale =scaleLinear()
            .domain(extent(data,yValue)) //min to max
            .range([0,innerHeight])
            .nice()
    const colorScale = scaleOrdinal() //takes input of some domain and returns value in some range
            .domain(data.map(colorValue))
            .range(["#E6842A", "#137B80", "#BE6CBA"])

    const circleRadius = 7
    const colorLegendLabel ="Species"
    return (
        <>
        <Link to="/"> 
                <button style={{background: "lightgrey",borderRadius:"6px", height:"2rem" }}>Go back Home</button>
        </Link>
        {/* Heading */}
        <h2 style={{marginBottom:"0"}}>Comapring Same Species of Three Iris Flowers</h2>

        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        {/* Options for X axis */}
            <WholeOptions
                        label="X"
                        id="x-select" 
                        options={attributes}
                        selectedValue={xAttribute}
                        onSelectedValueChange={setXAttribute} />
        
        {/* Options for Y axis */}
            <WholeOptions
                        label="Y"
                        id="y-select"
                        options={attributes}
                        selectedValue={yAttribute}
                        onSelectedValueChange={setYAttribute}
            />
         </div>
        {/* SVG part */}
        <svg height={height} width={width}>
            <g transform={`translate(${margin.left}, ${margin.top})`} >
                <ScatteredAxisBottom 
                    xScale={xScale} 
                    innerHeight={innerHeight}
                    tickOffset ={5}
                />
                <text 
                    className="axisLabel" 
                    textAnchor="middle"
                    transform={` translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
                >{yAxisLabel}</text>
                <ScatteredAxisLeft 
                    yScale={yScale} 
                    innerWidth={innerWidth}
                    tickOffset ={5}
                />
                <text 
                    className="axisLabel" 
                    x={innerWidth/2} 
                    y={innerHeight+xAxisLabelOffet} 
                    textAnchor="middle"
                >{xAxisLabel}</text>
                
                <ScatteredMarks 
                    data={data} 
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    colorScale={colorScale}
                    colorValue={colorValue}
                    circleRadius={circleRadius}
                />
                <g transform={`translate(${innerWidth + 60},60)`}>
                <text 
                    x={40}
                    y={-25}
                    className="axisLabel" 
                    textAnchor="middle"
                >{colorLegendLabel}</text>
                    <ColorLegend circleRadius={circleRadius} colorScale={colorScale}/>
                </g>
            </g>
        </svg>
            <div className="linkWrapper">
                <Link className="link" to="/barchart">
                    <button className="btn">
                        Bar Chart of Meat Consumed in Nepal
                    </button>
                </Link>
                <Link className="link" to="/linedata">
                    <button className="btn">
                        Line Graph of Temperature this Week
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

export default ScatteredData
