import "./Axis.css"

const AxisBottom =({xScale,innerHeight, tickFormat}) =>
    xScale.ticks().map(tickValue => (
        <g className="axis" key={tickValue} transform={`translate (${xScale(tickValue)},0)`}>
         <text y={innerHeight+3} 
                 dy=".71em" 
                 style={{textAnchor:"middle"}}>
             {tickFormat(tickValue)}
         </text>
         <line y2={innerHeight} stroke="#978F80"></line>
       </g>
))
export default AxisBottom
